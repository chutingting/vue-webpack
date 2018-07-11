<template>
    <div>
        <div v-jspang="color" id="aaa">
            {{num}}
        </div>
        <button @click='jia'>加分</button>

        <input type="text" v-detectText v-model="text">
    </div>

</template>
<script>
export default {
  data() {
    return {
      color: "red",
      num: 10,
      text: ''
    };
  },
  methods: {
    jia() {
      this.num++;
    }
  },
  directives: {                                                                                                                                                                                                                                                                                                                     
    jspang: {
      bind: function(el, binding, vnode) {
        //被绑定
        el.style = "color:" + binding.value;

        console.log("1 - bind");
      },
      inserted: function() {
        //绑定到节点
        console.log("2 - inserted");
      },
      update: function() {
        //组件更新
        console.log("3 - update");
      },
      componentUpdated: function() {
        //组件更新完成
        console.log("4 - componentUpdated");
      },
      unbind: function() {
        //解绑
        console.log("5 - unbind");
      }
    },
    detectText: {
      update: function(el) {
        console.log("我改变了" + el.value);
      },
      componentUpdated: function(el) {
          let reg = /^[\u4e00-\u9fa5]+$/;
          if(el.value && !reg.test(el.value)){
              console.log('请输入纯汉字')
          }
        console.log("更新完毕" + el.value);
      },
    }
  }
};
</script>


