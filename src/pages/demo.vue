<template>
    <div>
        第三个页面
        <upload :url="uploadUrl" :type="type"></upload>
    </div>

</template>
<script>
import upload from "../components/upload/index.vue";
export default {
  data() {
    return {
      uploadUrl: "/url",
      type: "xlsx,xls"
    };
  },
  methods: {},
  created() {
  },
  components: {
    upload
  }
};
</script>