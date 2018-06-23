<template>
      <div>
          <div>
                2.正则匹配 请使用正则表达式取出下方宝贝标题中的货号，如（1181A30533）
                <p> 【满400减40】ONLY2018夏新印花蝴蝶结宽松T恤女|1181A30533</p>
                <p> 【满400减40】ONLY夏季新款设计心形纽扣宽松衬衫女|117S2304501</p>
                <p>  Vero Moda2018春夏新品纯色装饰带宽松休闲T恤女318E101523</p>
              <div class="text-danger">正则结果: {{textVal.join(',')}}</div>
          </div>

           <p style="margin-top:20px;"> 3.架构设计概述如果开发类似https://zuanshi.taobao.com这样的网站，都需要做到哪些方面的工作，包括开发所需的时间、人员、使用的外部库及与后端人员对接所需的各项工作等</p>
           <div class="text-danger">
                <p> 产品：出UE给到UI</p>
                <p> UI：出页面设计</p>
                <p> 前端：切图、写静态页，可以使用swiper轮播图、基于 Vue 2.0 的桌面端组件库
Element UI，可以使用iconfont做字体图标减少http请求，和后端配合联调页面数据</p>
                <p> 后端：单点登录接口，最新动态接口，个人中心相关接口，通栏banner接口等</p>
                <p> 运维：申请域名，部署静态资源服务器Nginx,配置反向代理</p>
                <p> 测试：测试各项功能是否正常</p>
            </div>
      </div>

</template>
<script>
    export default {
       data(){
           return {
               text : ['【满400减40】ONLY2018夏新印花蝴蝶结宽松T恤女|1181A30533',
                        '满400减40】ONLY夏季新款设计心形纽扣宽松衬衫女|117S2304501',
                        'Vero Moda2018春夏新品纯色装饰带宽松休闲T恤女318E101523'],
                textVal : []
           }
       },
        methods:{
           getData(){
               let  r = new RegExp('([0-9A-Z]+)$');
               this.text.forEach(e=>{
                    this.textVal.push(r.exec(e)[0])
               });
           }
        },
        created(){
            this.getData();
        }
    }
</script>