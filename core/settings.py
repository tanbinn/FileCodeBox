import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
data_root = BASE_DIR / 'data'

if not data_root.exists():
    data_root.mkdir(parents=True, exist_ok=True)

DEFAULT_CONFIG = {
    'file_storage': 'local',
    'name': 'shuttletool',
    'description': '',
    'notify_title': 'system notification',
    'notify_content': 'welcome to use shuttletool.\nEnter a 5-digit pickup code on the homepage to download.\n Click the button in the bottom left corner to upload.\nThe pickup code of the uploaded file can be viewed by clicking the button in the bottom right corner.',
    'page_explain': '',
    'keywords': 'shuttletool',
    's3_access_key_id': '',
    's3_secret_access_key': '',
    's3_bucket_name': '',
    's3_endpoint_url': '',
    's3_region_name': 'auto',
    's3_signature_version': 's3v2',
    's3_hostname': '',
    's3_proxy': 0,
    'max_save_seconds': 0,
    'aws_session_token': '',
    'onedrive_domain': '',
    'onedrive_client_id': '',
    'onedrive_username': '',
    'onedrive_password': '',
    'onedrive_root_path': 'filebox_storage',
    'onedrive_proxy': 0,
    'admin_token': 'shuttletool10086',
    'openUpload': 1,
    'uploadSize': 1024 * 1024 * 100,
    'expireStyle': ['count'],
    'uploadMinute': 1,
    'opacity': 1,
    'background': '',
    'uploadCount': 10,
    'errorMinute': 1,
    'errorCount': 3,
    'port': 12345,
}


class Settings:
    def __init__(self, defaults=None):
        self.default_config = defaults or {}
        self.user_config = {}

    def __getattr__(self, attr):
        if attr in self.user_config:
            return self.user_config[attr]
        if attr in self.default_config:
            return self.default_config[attr]
        raise AttributeError(f"'{self.__class__.__name__}' object has no attribute '{attr}'")

    def __setattr__(self, key, value):
        if key in ['default_config', 'user_config']:
            super().__setattr__(key, value)
        else:
            self.user_config[key] = value

    def items(self):
        return {**self.default_config, **self.user_config}.items()


settings = Settings(DEFAULT_CONFIG)
