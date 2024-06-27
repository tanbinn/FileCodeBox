# @Time    : 2023/8/15 17:43
# @Author  : Lan
# @File    : depends.py
# @Software: PyCharm
from typing import Union

from fastapi import Header, HTTPException
from fastapi.requests import Request
from core.settings import settings


async def admin_required(authorization: Union[str, None] = Header(default=None), request: Request = None):
    is_admin = authorization == str(settings.admin_token)
    if request.url.path.startswith('/share/'):
        if not settings.openUpload and not is_admin:
            raise HTTPException(status_code=403, detail='This site has not enabled tourist uploads. If you need to upload, please log in to the backend first')
    else:
        if not is_admin:
            raise HTTPException(status_code=401, detail='Unauthorized or failed authorization verification')
