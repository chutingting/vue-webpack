<template>
    <div class="upaload">
        <span class="input-file">请选择
            <input @change="change" :ref="refKey" type="file" id="file" class="imgFile">
        </span>
        <span style="margin-left:10px;">{{msg}}</span>
        <input type="button" style="margin-left:10px;" class="btn btn-info" @click="upload" value="上传" />
        <input type="button" style="margin-left:10px;" class="btn btn-info" @click="reset" value="重置" />
    </div>
</template>

<script>
export default {
  name: "upload",
  props: ["url", "type"],
  data() {
    return {
      msg: "",
      refKey: "inputKey"
    };
  },
  methods: {
    change() {
      let val = this.$refs[this.refKey].value;
      this.msg = val.substring(val.lastIndexOf("\\") + 1);
    },
    reset() {
      this.$refs[this.refKey].value = ''
      this.msg = '';
    },
    upload() {
      let dom = this.$refs[this.refKey];
      let val = dom.value;
      if (val) {
        let formData = new FormData();
        formData.append("file", dom.files[0]);
        if (this.type) {
          let fileName = dom.files[0].name;
          let suffix = fileName.substring(fileName.lastIndexOf(".") + 1);
          debugger
          if (this.type.indexOf(",") == -1) { //判断是否多个后缀
            if (this.type != suffix) {
              this.msg = "后缀名必须为:" + this.type;
              return;
            }
          } else {
            let res = this.type.split(",").filter(item => {
              return item.toLowerCase() == suffix.toLowerCase();
            });
            if (res.length == 0) {
              this.msg = "后缀名必须为:" + this.type;
              return;
            }
          }
        }
         let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
        this.$http
          .post(this.url, formData,config)
          .then(data => {})
          .catch(error => {});
      }
    }
  },
  created() {
  }
};
</script>

<style  scoped>
.input-file {
  position: relative;
  overflow: hidden;
  text-align: center;
  width: 100%;
  background-color: #2c7;
  border-radius: 4px;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  color: #fff;
  text-decoration: none;
}
.input-file input[type="file"] {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  background-color: #f00;
  /*transform: translate(-300px, 0px) scale(4);*/
  height: 100%;
  width: 100%;
  opacity: 0;
  filter: alpha(opacity=0);
}
</style>
 

