<template>
    <section class="chart-container">
          <div id="chartColumn" style="width:100%; height:400px;"></div>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartColumn: null
            }
        },

        methods: {
            drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                var that = this;
                    that.$http.jsonp("https://pm.linkworld.cn/json/test").then(function(data){
                            this.chartColumn.setOption({
                                xAxis: {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: data.body.map(e=>e.logDate)
                                },
                                yAxis: {
                                    type: 'value' 
                                },
                                series: [{
                                    data: data.body.map(e=>e.ecpc),
                                    type: 'line',
                                    areaStyle: {}
                                }]
                            });
                    },function(error){
                        console.log(error)
                    });
                
            },
            drawCharts() {
                this.drawColumnChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

</style>
