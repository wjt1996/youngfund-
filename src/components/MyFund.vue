<template>
    <div class="admin-content">
        <div class="am-cf am-padding">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">我的基金</strong> / <small>Personal Fund</small></div>
        </div>
        <div style="min-height: 200px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff">
              </v-table>
        </div>
    </div>
</template>
<script>
export default {
    name:"MyFund",
    data() {
      return {
           tableData: [{
               "fundId":"1001",
                "fundName":"教育基金",
                "dailyMoney":"5",
                "rate":"0.07",
                "lock":"基础模式",
                "buyTime":"20190712",
                "fundMoney":"1016.204",
           }],
        columns: [
          {field: 'fundId', title: '基金编号', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundName', title: '基金名称', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'dailyMoney', title: '每日投入（元）', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'rate', title: '利率', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'lock', title: '模式', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'buyTime', title: '购入时间', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundMoney', title: '基金资产（元）', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
           
        ],

        login:[{logName:"",
                password:""}]
      }
    }
}
</script>
<style>



</style>
