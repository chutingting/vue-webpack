<template>
  <div>
    <upload :type="type"  v-model="uploadFiles" :multiple='true'> <i class="el-icon-document"></i>solt多文件上传</upload>
    <button @click="uploaCk" class="btn btn-sm">上传</button>
  </div>

</template>
<script>
import upload from "@/components/uploadMore/index.vue";
export default {
  data() {
    return {
      type: "xlsx,xls",
      uploadFiles: ""
    };
  },
  methods: {
    uploaCk() {
      // 获取到要上传的文件
      if (!this.uploadFiles) {
        this.$message({
          message: "请选择上传文件",
          type: "error"
        });
        return;
      }
      let formData = new FormData();
      formData.append('file',this.uploadFiles)
      this.$http.post("/aaa",formData).then(data => {
       
      });
      console.log(this.uploadFiles);
    }
  },
  created() {},
  components: {
    upload
  }
};
</script>