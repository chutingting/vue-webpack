class CheckResult {
  constructor(isSuccess, message) {
    this.message = message
    this.isSuccess = isSuccess
  }
}
CheckResult.SUCCESS = new CheckResult(true, 'success')


let obj = {
  fileValidate_size(file, size) {
    let fileSize = Math.round(file.size / 1024 * 100) / 100; //单位为KB
  },
  fileValidate_type(file, type) {
    if (type) {
      let fileName = file.name
      let suffix = fileName.substring(fileName.lastIndexOf('.') + 1)
      if (type.indexOf(',') == -1) {
        if (type != suffix) {
          return new CheckResult(false, '后缀名只能是' + type)
        }
      } else {
        let res = type.split(',').filter(item => {
          return item.toLowerCase() == suffix.toLowerCase()
        })
        if (res.length == 0) {
          return new CheckResult(false, '后缀名只能是' + type)
        }
      }
    }
    return CheckResult.SUCCESS
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
