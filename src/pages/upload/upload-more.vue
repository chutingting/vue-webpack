<template>
  <div>
    <upload :type="type" :text='uploadText' v-model="uploadFiles" :multiple='true'></upload>
    <button @click="uploaCk" class="btn btn-sm">上传</button>
  </div>

</template>
<script>
import upload from "@/components/uploadMore/index.vue";
export default {
  data() {
    return {
      type: "xlsx,xls",
      uploadFiles: "",
      uploadText: "选取多个文件"
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
      console.log(this.uploadFiles);
    }
  },
  created() {},
  components: {
    upload
  }
};
</script>