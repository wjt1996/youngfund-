<template>
    <div class="admin-content" style="overflow-y:scroll; white-space:nowrap;">
        <div class="am-cf am-padding">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">基金市场</strong> / <small>Fund Market</small></div>
        </div>
						<div style="height: 200px;">
                        <div class="admin-content" style="overflow-y:scroll; white-space:nowrap;">
                            <v-table
                            is-horizontal-resize
                            style="width:100%"
                            :columns="Columns"
                            :table-data="tableData"
                            :row-click="contro"
                            row-hover-color="#eee"
                            row-click-color="#edf7ff">
                            </v-table>
                        </div>
                        </div>
        <div class="am-cf am-padding">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">市场热度</strong> / <small>Market Activity</small></div>
        </div>
						<div style="height: 200px;">
                        <div class="admin-content" style="overflow-y:scroll; white-space:nowrap;">
                            <v-table
                            is-horizontal-resize
                            style="width:100%"
                            :columns="col"
                            :table-data="fundDataOrder"
                            :row-click="contro"
                            row-hover-color="#eee"
                            row-click-color="#edf7ff">
                            </v-table>
                        </div>
                        </div>

    <div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
			 <a id="modal-814974" ref="modal814974" href="#modal-container-814974" role="button" class="btn" data-toggle="modal" style="visibility:hidden;">基金操作</a>
			
			<div class="modal fade" id="modal-container-814974" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title" id="myModalLabel">
								基金详细信息
							</h4>
						</div>
						<div>
							<div class="col-sm-12 col-md-8">
        <form class="am-form am-form-horizontal"> 
          <div class="am-form-group">
            <label for="user-name" class="col-sm-3 am-form-label">基金名称</label>
            <label class="col-sm-9">{{fundname}}</label>
          </div>
          <div class="am-form-group">
            <label for="user-name" class="col-sm-3 am-form-label">详细信息</label>
            <textarea readonly class="col-sm-9" style="width:72%;height:100px;" v-model="intro"></textarea>
          </div>
          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">购买基金</label>
            <div class="col-sm-9">
              <input type="email" id="fund-money" v-model="fundMoneyB" value="">
            </div>
          </div>
             <button type="button"  class="btn btn-primary" v-on:click="buy" data-dismiss="modal">新增基金</button>
             <button type="button"  class="btn btn-default" data-dismiss="modal">关闭</button>

        </form>
      </div>
						</div>
						<div class="modal-footer">
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
	</div>
</div>
    </div>
</template>
<script>
export default {
    name:"AllFund",
    data() {
      return {
           tableData: [{
               "fundId":"",
                "fundName":"",
                "dailyMoney":"",
                "rate":"",
                "lock":"",
                "fundIntroduction":"",
           }],
           fundDataOrder: [{
               "fundId":"",
                "fundName":"",
                "dailyMoney":"",
                "rate":"",
                "lock":"",
                "fundPeople":"",
                "fundLoop":"",

           }],
        Columns: [
          {field: 'fundId', title: '基金编号', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundName', title: '基金名称', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'dailyMoney', title: '每日投入（元）', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'rate', title: '利率', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'lock', title: '基金模式', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},

        ],
        col: [
          {field: 'fundId', title: '基金编号', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundName', title: '基金名称', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'dailyMoney', title: '每日投入（元）', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'rate', title: '利率', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'lock', title: '基金模式', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundPeople', title: '购买人数', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundLoop', title: '基金池', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},

        ],
        uid:{'userId':0,
             'fundId':"",
             'fundMoney':"",
        },
        fundid:0,
        fundname:"",
        fundMoneyB:"",
        intro:"",

    }
    },
    created(){
        var uId=localStorage.getItem("userId");
        this.uid.userId=uId;
        
        this.$axios("http://192.168.137.173:8888/bank/fundinfo/selectallfund").then(
            res=>{
                var Info=res.data;
                console.log(Info);
                this.tableData=Info;
                });
        this.$axios("http://192.168.137.173:8888/bank/fundinfo/fundview").then(
            res=>{
                var Info=res.data;
                console.log(Info);
                this.fundDataOrder=Info;
                });
                
    },
     methods:{
        contro(rowIndex,rowData){
            this.fundid=rowData.fundId;
            this.fundname=rowData.fundName;
            this.tableData.forEach((item,index) => {
                if(item.fundId==this.fundid){
                    this.intro=item.fundIntroduction;
                }
            });

            document.getElementById("modal-814974").click();
            

        },
        buy:function(){
            if(this.fundMoneyB==""){alert("请输入购买金额");}
            else{
                this.uid.fundId=this.fundid;
                this.uid.fundMoney=this.fundMoneyB;
                console.log(this.uid);
                axios.post("http://192.168.137.173:8888/bank/fundinfo/addfund",this.uid).then(res=>{
                    console.log(res);
                    if(res.data.flag==false){alert(res.data.message);}
                    else{alert("购买成功！！！");}
                }).then(res=>{
                    this.$axios("http://192.168.137.173:8888/bank/fundinfo/selectallfund").then(
            res=>{
                var Info=res.data;
                console.log(Info);
                this.tableData=Info;
                });
        this.$axios("http://192.168.137.173:8888/bank/fundinfo/fundview").then(
            res=>{
                var Info=res.data;
                console.log(Info);
                this.fundDataOrder=Info;
                });
                });
                this.fundMoneyB="";
                
            }
        },

    }

}
</script>
<style>



</style>
