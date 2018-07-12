<template>
  <div>
    <!-- 上传多文件 multiple 可以选择多个 单个进行 push -->
    <span class="input-file">{{text}}
      <input @change="change" :ref="refKey" type="file" class="imgFile" :multiple="multiple">
    </span>

    <input type="file" multiple >

    <div v-if="fileListShow">
      <div class="fileName" v-for="(item,index) in filesList" :key="index">
        <i class="el-icon-document"></i> {{item.name}}
        <i class="el-icon-close close" @click="remove(index, filesList)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import FileChecker from "./fileChecker.js";
let that = null;
export default {
  name: "upload",
  props: ["type", "text", "multiple"],
  data() {
    return {
      msg: "",
      refKey: "inputKey",
      fileListShow: false,
      filesList: [],
      fileListName: []
    };
  },
  methods: {
    uploadValue(val) {
      this.$emit("input", val);
    },
    remove(index,rows) {
      debugger
      rows.splice(index, 1);
      // this.msg = "";
      // this.uploadValue("");
      // this.$refs[this.refKey].value = "";
      // this.fileListShow = false;
    },
    change() {
      let dom = this.$refs[this.refKey];
      let val = dom.value;
      debugger;
      this.msg = val.substring(val.lastIndexOf("\\") + 1);
      if (val) {
        let option = {
          type: this.type,
          size: 0
        };
        // let _files = [];
        // if (this.multiple) {
        //   this.filesList = this.filesList.concat(Array.from(dom.files));
        // } else {
        //   this.filesList = this.filesList.concat(Array.from(dom.files));
        // }
        var _filesList = this.filesList.concat(Array.from(dom.files));
        for(var i=0;i<_filesList.length;i++){
          debugger
        }

        let checkResult = FileChecker.fileValidate(this.filesList[0], option);
        if (checkResult.isSuccess) {
          this.uploadValue(dom.files[0]);
          this.fileListShow = true;
        } else {
         // this.msg = checkResult.message;
         // this.remove();
          this.$message({
            message: checkResult.message,
            type: "error"
          });
        }
      } else {
        this.$message({
          message: "请选择上传文件",
          type: "error"
        });
      //  this.remove();
      }
    }
  },
  created() {
    that = this;
  }
};
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
.input-file input[type="file"] {
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
  margin-top: 10px;
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
 

