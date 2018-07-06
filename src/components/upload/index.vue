<template>
  <div>
    <span class="input-file">{{text}}
      <input @change="change" :ref="refKey" type="file" class="imgFile">
    </span>

    <div class="fileName" v-if="fileList">
      <i class="el-icon-document"></i> {{msg}}
      <i class="el-icon-close close" @click="remove"></i>
    </div>
  </div>
</template>

<script>
import FileChecker from './fileChecker.js'
export default {
  name: 'upload',
  props: ['type', 'text'],
  data() {
    return {
      msg: '',
      refKey: 'inputKey',
      fileList: false
    }
  },
  methods: {
    uploadValue(val) {
      this.$emit('input', val)
    },
    remove() {
      this.msg = ''
      this.uploadValue('')
      this.$refs[this.refKey].value = ''
      this.fileList = false
    },
    change() {
      let dom = this.$refs[this.refKey]
      let val = dom.value
      this.msg = val.substring(val.lastIndexOf('\\') + 1)
      if (val) {
        let option = {
          type: this.type,
          size: 0
        }
        let checkResult = FileChecker.fileValidate(dom.files[0], option)
        if (checkResult.isSuccess) {
          this.uploadValue(dom.files[0])
          this.fileList = true
        } else {
          this.msg = checkResult.message
          this.remove()
          this.$message({
            message: checkResult.message,
            type: 'error'
          })
        }
      } else {
        this.$message({
          message: '请选择上传文件',
          type: 'error'
        })
        this.remove()
      }
    }
  },
  created() {}
}
</script>

<style  scoped>
.input-file {
  position: relative;
  overflow: hidden;
  text-align: center;
  display: inline-block;
  background-color: #409eff;
  border-radius: 3px;
  padding: 9px 15px;
  font-size: 12px;
  font-weight: normal;
  color: #fff;
  text-decoration: none;
}
.input-file input[type='file'] {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  background-color: #f00;
  height: 100%;
  width: 100%;
  opacity: 0;
  filter: alpha(opacity=0);
}
.fileName {
  color: #606266;
  background: #eef3f7;
  line-height: 24px;
  /* display: block; */
  margin-right: 40px;
  overflow: hidden;
  font-size: 12px;
  padding-left: 4px;
  white-space: nowrap;
  margin-top:10px;
}
.fileName i {
  margin-right: 8px;
}
.fileName .close {
  float: right;
  line-height: 24px;
  cursor: pointer;
}
/* .fileName:hover{
    cursor: pointer;
} */
</style>
 

