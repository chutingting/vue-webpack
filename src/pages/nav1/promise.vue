<template>
    <div>111</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    demo1() {
      var sleep = function(time) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            // 返回 ‘ok’
            //resolve("ok");
            // 模拟出错了，返回 ‘error’
            reject("error demo01");
          }, time);
        });
      };

      var start = async function() {
        try {
          console.log("end demo01");
          let result = await sleep(3000); //错误不执行
          console.log(result); // 收到 ‘ok’
        } catch (err) {
          console.log(err); // 这里捕捉到错误 `error`
        }
      };
      start();
    },
    demo2() {
      async function test() {
        /* return new Promise(function(resolve, reject) {
          resolve("ok demo02");
        }); */
        return Promise.resolve("ok demo02");
      }
      //只有返回了 .Promise 才可以用then，需要等待别的接口返回成功时，用await
      test().then(d => {
          console.log(d);
        }).catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    //   this.demo1();
    this.demo2();
  }
};
</script>

