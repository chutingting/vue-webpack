class CheckResult {
  constructor(isSuccess, message,data) {
    this.message = message;
    this.isSuccess = isSuccess;
    this.data = data;
  }
}

CheckResult.SUCCESS = new CheckResult(true, 'success')

let obj = {
  fileValidate_size(file, size) {
    let fileSize = Math.round(file.size / 1024 * 100) / 100; //单位为KB
  },
  fileValidate_type(file, type) {
    let files = [],flag = false;
    // 判断后缀名
    if (type) {
      for (var i = 0; i < file.length; i++) {
        let fileName = file[i].name;
        let suffix = fileName.substring(fileName.lastIndexOf('.') + 1);
        if (type.indexOf(',') == -1) {
          if (type == suffix) {
            files.push(file[i]);
          }else{
            flag = true;
          }
        } else {
          let res = type.split(',').filter(item => {
            return item.toLowerCase() == suffix.toLowerCase();
          })
          if (res.length != 0) {
            files.push(file[i]);
          }else{
            flag = true;
          }
        }
      }
    }
    if(flag){
      return new CheckResult(false, '您只能选择符合条件的文件' , files);
    }else{
      return new CheckResult(true, 'sucess', files)
    }
  },


  fileValidate(file, option) {
    let option_type = option.type
    let option_size = option.size
    return this.fileValidate_type(file, option_type)

  },
  fileListValidate(files, option) {

  }
}
export default obj