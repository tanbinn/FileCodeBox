# @Time    : 2023/8/14 03:59
# @Author  : Lan
# @File    : views.py
# @Software: PyCharm
# 导入所需的库和模块
from fastapi import APIRouter, Form, UploadFile, File, Depends, HTTPException
from apps.admin.depends import admin_required
from apps.base.models import FileCodes
from apps.base.pydantics import SelectFileModel
from apps.base.utils import get_expire_info, get_file_path_name, error_ip_limit, upload_ip_limit
from core.response import APIResponse
from core.settings import settings
from core.storage import storages, FileStorageInterface
from core.utils import get_select_token

# 创建一个API路由
share_api = APIRouter(
    prefix='/share',  # 路由前缀
    tags=['分享'],  # 标签
)


# 分享文本的API
@share_api.post('/text/', dependencies=[Depends(admin_required)])
async def share_text(text: str = Form(...), expire_value: int = Form(default=1, gt=0), expire_style: str = Form(default='day'), ip: str = Depends(upload_ip_limit)):
    # 获取过期信息
    expired_at, expired_count, used_count, code = await get_expire_info(expire_value, expire_style)
    # 创建一个新的FileCodes实例
    await FileCodes.create(
        code=code,
        text=text,
        expired_at=expired_at,
        expired_count=expired_count,
        used_count=used_count,
        size=len(text),
        prefix='文本分享'
    )
    # 添加IP到限制列表
    upload_ip_limit.add_ip(ip)
    # 返回API响应
    return APIResponse(detail={
        'code': code,
    })


# 分享文件的API
@share_api.post('/file/', dependencies=[Depends(admin_required)])
async def share_file(expire_value: int = Form(default=1, gt=0), expire_style: str = Form(default='day'), file: UploadFile = File(...), ip: str = Depends(upload_ip_limit)):
    # 检查文件大小是否超过限制
    if file.size > int(settings.uploadSize):
        raise HTTPException(status_code=403, detail=f'The file size exceeds the limit, with a maximum of{settings.uploadSize}bytes')
    # 获取过期信息
    if expire_style not in settings.expireStyle:
        raise HTTPException(status_code=400, detail='Expiration time type error')
    expired_at, expired_count, used_count, code = await get_expire_info(expire_value, expire_style)
    # 获取文件路径和名称
    path, suffix, prefix, uuid_file_name, save_path = await get_file_path_name(file)
    # 保存文件
    file_storage: FileStorageInterface = storages[settings.file_storage]()
    await file_storage.save_file(file, save_path)
    # 创建一个新的FileCodes实例
    await FileCodes.create(
        code=code,
        prefix=prefix,
        suffix=suffix,
        uuid_file_name=uuid_file_name,
        file_path=path,
        size=file.size,
        expired_at=expired_at,
        expired_count=expired_count,
        used_count=used_count,
    )
    # 添加IP到限制列表
    upload_ip_limit.add_ip(ip)
    # 返回API响应
    return APIResponse(detail={
        'code': code,
        'name': file.filename,
    })


# 根据code获取文件
async def get_code_file_by_code(code, check=True):
    # 查询文件
    file_code = await FileCodes.filter(code=code).first()
    # 检查文件是否存在
    if not file_code:
        return False, 'file does not exist'
    # 检查文件是否过期
    if await file_code.is_expired() and check:
        return False, 'The file has expired',
    return True, file_code


# 获取文件的API
@share_api.get('/select/')
async def get_code_file(code: str, ip: str = Depends(error_ip_limit)):
    file_storage: FileStorageInterface = storages[settings.file_storage]()
    # 获取文件
    has, file_code = await get_code_file_by_code(code)
    # 检查文件是否存在
    if not has:
        # 添加IP到限制列表
        error_ip_limit.add_ip(ip)
        # 返回API响应
        return APIResponse(code=404, detail=file_code)
    # 更新文件的使用次数和过期次数
    file_code.used_count += 1
    if file_code.expired_count > 0:
        file_code.expired_count -= 1
    # 保存文件
    await file_code.save()
    # 返回文件响应
    return await file_storage.get_file_response(file_code)


# 选择文件的API
@share_api.post('/select/')
async def select_file(data: SelectFileModel, ip: str = Depends(error_ip_limit)):
    file_storage: FileStorageInterface = storages[settings.file_storage]()
    # 获取文件
    has, file_code = await get_code_file_by_code(data.code)
    # 检查文件是否存在
    if not has:
        # 添加IP到限制列表
        error_ip_limit.add_ip(ip)
        # 返回API响应
        return APIResponse(code=404, detail=file_code)
    # 更新文件的使用次数和过期次数
    file_code.used_count += 1
    if file_code.expired_count > 0:
        file_code.expired_count -= 1
    # 保存文件
    await file_code.save()
    # 返回API响应
    return APIResponse(detail={
        'code': file_code.code,
        'name': file_code.prefix + file_code.suffix,
        'size': file_code.size,
        'text': file_code.text if file_code.text is not None else await file_storage.get_file_url(file_code),
    })


# 下载文件的API
@share_api.get('/download')
async def download_file(key: str, code: str, ip: str = Depends(error_ip_limit)):
    file_storage: FileStorageInterface = storages[settings.file_storage]()
    # 检查token是否有效
    is_valid = await get_select_token(code) == key
    if not is_valid:
        # 添加IP到限制列表
        error_ip_limit.add_ip(ip)
    # 获取文件
    has, file_code = await get_code_file_by_code(code, False)
    # 检查文件是否存在
    if not has:
        # 返回API响应
        return APIResponse(code=404, detail='file does not exist')
    # 如果文件是文本，返回文本内容，否则返回文件响应
    if file_code.text:
        return APIResponse(detail=file_code.text)
    else:
        return await file_storage.get_file_response(file_code)
