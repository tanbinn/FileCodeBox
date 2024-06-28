export default {
  send: {
    disclaimers: 'Page Instructions',
    prompt1: 'Drag and drop text or files here, or ',
    prompt2: 'deleted after 5 minutes',
    prompt3: 'Please enter the text you want to send, supports MarkDown format',
    share: 'Share',
    textShare: 'Text Share',
    clickUpload: 'Click to Upload',
    pleaseInputExpireValue: 'Please enter the validity period',
    expireStyle: 'Expiration Method',
    expireData: {
      day: 'Days',
      hour: 'Hours',
      forever: 'Permanent',
      minute: 'Minutes',
      count: 'Times'
    },
    expireValue: {
      day: 'Days',
      hour: 'Hours',
      minute: 'Minutes',
      count: 'Times'
    },
    fileType: {
      file: 'File',
      text: 'Text'
    }
  },
  fileBox: {
    copySuccess: 'Copy Successful',
    inputNotEmpty: 'Enter five-digit code',
    sendFileBox: 'Outgoing Box',
    ok: 'OK',
    receiveFileBox: 'Incoming Box',
    textDetail: 'Text Details',
    copy: 'Copy',
    close: 'Close',
    delete: 'Delete',
    download: 'Click to Download',
    detail: 'View Details',
    copyLink: 'Copy Link',
  },
  admin: {
    about: {
      source1: 'welcome to use shuttletool',
      source2: 'shuttletool'
    },
    settings: {
      name: 'Website Name',
      description: 'Website Description',
      uploadlimit: 'Upload Limit',
      explain: 'Interface Instructions',
      errorlimit: 'Error Limit',
      keywords: 'Keywords',
      notify_title: 'Notification Title',
      notify_content: 'Notification Content',
      background: 'Background Image',
      max_save_seconds: 'Maximum Save Time',
      maxSaveSecondsNote: 'Maximum save time, unit: (seconds), default is 0 which means 7 days',
      admin_token: 'Admin Password',
      uploadSize: 'File Size',
      expireStyle: 'Expiration Method',
      uploadSizeNote: 'Maximum file size, unit: (Bytes), 1mb = 1 * 1024 * 1024',
      openUpload: {
        title: 'Enable Upload',
        open: 'Enable Guest Upload',
        close: 'Disable Guest Upload',
        note: 'After disabling, you need to log in to the backend to upload',
      },
      file_storage: {
        title: 'Storage Engine',
        local: 'Local Storage',
        s3: 'S3 Storage',
        note: 'After updating, you need to restart FileCodeBox',
      },
      mei: 'Every',
      minute: 'Minutes',
      upload: 'Upload',
      files: 'Files',
      allow: 'Allow',
      errors: 'Errors',
      save: 'Save',
      saveSuccess: 'Save Successful',
    },
    fileView: {
      code: 'Retrieval Code',
      prefix: 'File Prefix',
      suffix: 'File Suffix',
      text: 'Text',
      used_count: 'Times Used',
      expired_count: 'Available Times',
      size: 'File Size',
      expired_at: 'Expiration Time',
      file_path: 'File Path',
      action: 'Action',
      delete: 'Delete',
      delete_success: 'Delete Successful',
      forever: 'Permanent',
      unlimited_count: 'Unlimited Times',
      download: 'Download',
      download_fail: 'File save failed, please try again later~',
    },
    menu: {
      fileManage: 'File Management',
      systemSetting: 'System Settings',
      about: 'About Us',
      color: 'Color Mode',
      send: 'Send',
      receive: 'Receive',
      signout: 'Sign Out',
    },
    login: {
      managePassword: 'Admin Password',
      passwordNotEmpty: 'Password cannot be empty',
      login: 'Login',
      loginSuccess: 'Login Successful',
      loginError: 'Login Failed',
    }
  },
  msg: {
    fileOverSize: 'File Too Large',
    fileUploadFail: 'Upload Failed',
    fileUploadSuccess: 'Upload Successful',
    uploadClose: 'Guest upload is closed on this site',
  }
};