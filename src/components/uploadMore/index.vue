<template>
  <div>
    <!-- 上传多文件 multiple 可以选择多个 单个进行 push -->
    <span class="input-file">
      <slot></slot>
      <input @change="change" :ref="refKey" type="file" class="imgFile" :multiple="multiple">
    </span>

    <transition name="fade">
      <div v-if="fileListShow">
        <div class="fileName" v-for="(item,index) in filesList" :key="index">
          <i class="el-icon-document"></i> {{item.name}}
          <i class="el-icon-close close" @click="remove(index, filesList)"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FileChecker from "./fileChecker.js";
let that = null;
export default {
  name: "upload",
  props: ["type", "multiple"],
  data() {
    return {
      refKey: "inputKey",
      filesList: []
    };
  },
  methods: {
    updateValue(val) {
      this.$emit("input", val);
    },
    remove(index, rows) {
      rows.splice(index, 1);
      if (this.filesList == 0) {
        this.updateValue("");
      }
    },
    isMultiple(data) {
      if (this.multiple) {
        this.filesList = this.filesList.concat(Array.from(data));
        this.updateValue(this.filesList);
      } else {
        this.filesList = Array.from(data);
        this.updateValue(this.filesList[0]);
      }
    },
    change() {
      let dom = this.$refs[this.refKey];
      let val = dom.value;
      if (val) {
        let option = {
          type: this.type,
          size: 0
        };
        let checkResult = FileChecker.fileValidate(dom.files, option);
        if (checkResult) {
          this.isMultiple(checkResult.data);
        }
        if (!checkResult.isSuccess) {
          this.$message({
            message: checkResult.message,
            type: "error"
          });
        }
      }
    }
  },
  created() {
    that = this;
  },
  computed: {
    fileListShow() {
      return this.filesList && this.filesList.length;
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
 

