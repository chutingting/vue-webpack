<template>
  <div>
    <upload :type="type" :text='uploadText' v-model="uploadFiles"></upload>
    <button @click="upload" class="btn btn-sm">上传</button>
    <img src="../../static/img/logo.png" alt="111" v-view-image>
  </div>

</template>
<script>
import upload from "@/components/upload/index.vue";
export default {
  data() {
    return {
      type: "xlsx,xls",
      uploadFiles: "",
      uploadText: "选取文件"
    };
  },
  methods: {
    upload() {
      // 获取到要上传的文件
      if (this.uploadFiles == "") {
        this.$message({
          message: "请选择上传文件",
          type: "error"
        });
        return;
      }
      console.log(this.uploadFiles);
    }
  },
  created() {},
  components: {
    upload
  }
};
</script>