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
      try {
        file.forEach((data, index) => {
          let fileName = data.name
          let suffix = fileName.substring(fileName.lastIndexOf('.') + 1)
          if (type.indexOf(',') == -1) {
            if (type != suffix) {
              // return new CheckResult(false, '后缀名只能是' + type)
              file.splice(index, 1);
              foreach.break = new Error("StopIteration");
            }
          } else {
            let res = type.split(',').filter(item => {
              return item.toLowerCase() == suffix.toLowerCase()
            })
            if (res.length == 0) {
              file.splice(index, 1);
              // return new CheckResult(false, '后缀名只能是' + type)
              foreach.break = new Error("StopIteration");
            }
          }
        });
      } catch (e) {
        if (e.message === "foreach is not defined") {
          return new CheckResult(false, '后缀名只能是' + type);
        } else throw e
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