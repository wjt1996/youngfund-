<template>
    <div class="admin-content" style="overflow-y:scroll; white-space:nowrap;">
        <div class="am-cf am-padding">
            <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">我的基金</strong> / <small>Personal Fund</small></div>
        </div>
        <div style="min-height: 280px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              :row-click="contro"
              row-hover-color="#eee"
              row-click-color="#edf7ff">
              </v-table>
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
								基金服务
							</h4>
						</div>
						<div>
							<div class="col-sm-12 col-md-8">
        <form class="am-form am-form-horizontal"> 
          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">购买基金</label>
            <div class="col-sm-9">
              <input type="email" id="fund-money" v-on:click="setSEmpty" v-model="fundMoneyB" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">取出基金</label>
            <div class="col-sm-9">
              <input type="email" id="fund-money" v-on:click="setBEmpty" v-model="fundMoneyS" value="">
            </div>
          </div>
             <button type="button"  class="btn btn-primary" v-on:click="buy" data-dismiss="modal">购买</button>
             <button type="button"  class="btn btn-primary" v-on:click="sale" data-dismiss="modal">取出</button>
             <button type="button"  class="btn btn-primary" v-on:click="deleteF" data-dismiss="modal">全部取出</button>
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
    name:"MyFund",
    data() {
      return {
           tableData: [{
               "fundId":"",
                "fundName":"",
                "rate":"",
                "buyTime":"",
                "fundMoney":"",
           }],
        columns: [
          {field: 'fundId', title: '基金编号', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundName', title: '基金名称', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'rate', title: '利率', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'buyTime', title: '购入时间', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'fundMoney', title: '基金资产（元）', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
          
        ],
        uid:{'userId':0,
             'fundId':"",
             'fundMoney':""
        },
        fundid:0,
        fundMoneyB:"",
        fundMoneyS:"",

    }
    },
    created(){
        var uId=localStorage.getItem("userId");
        this.uid.userId=uId;
        axios.post("http://192.168.137.173:8888/bank/userfund/selectall",this.uid).then(
            res=>{
                var Info=res.data;
                this.tableData=Info;
                });
                
    },
    methods:{
        contro(rowIndex,rowData){
            this.fundid=rowData.fundId;
            document.getElementById("modal-814974").click();
        },
        buy:function(){
            
            if(this.fundMoneyB==""){alert("请输入购买金额");}
            else{
                
                this.uid.fundId=this.fundid;
                this.uid.fundMoney=this.fundMoneyB;
                axios.post("http://192.168.137.173:8888/bank/userfund/updateadd",this.uid).then(res=>{
                    if(res.data.flag==false){alert("存款不足，购买失败");}
                    else{alert("购买成功！！！");}
                }).then(res=>{
                    axios.post("http://192.168.137.173:8888/bank/userfund/selectall",this.uid).then(
            res=>{
                var Info=res.data;
                this.tableData=Info;
                });
                });
                this.fundMoneyB="";
                
            }
        },
        sale:function(){
            if(this.fundMoneyS==""){alert("请输入取出金额");}
            else{
                this.uid.fundId=this.fundid;
                this.uid.fundMoney=this.fundMoneyS;
                axios.post("http://192.168.137.173:8888/bank/userfund/updatecut",this.uid).then(res=>{
                    if(res.data.flag==false){alert("资产不足，取出失败");}
                    else{alert("取出成功！！！");}
                }).then(res=>{
                    axios.post("http://192.168.137.173:8888/bank/userfund/selectall",this.uid).then(
            res=>{
                var Info=res.data;
                this.tableData=Info;
                });
                });
                this.fundMoneyS="";
                
            }
        },
        deleteF:function(){
            this.uid.fundId=this.fundid;
            axios.post("http://192.168.137.173:8888/bank/userfund/fundsale",this.uid).then(res=>{
                    if(res.data.flag==false){alert("取出失败");}
                    else{alert("取出成功！！！");}
                }).then(res=>{
                    axios.post("http://192.168.137.173:8888/bank/userfund/selectall",this.uid).then(
            res=>{
                var Info=res.data;
                this.tableData=Info;
                });
                });
                
        },
        setSEmpty:function(){
            this.fundMoneyS="";
        },
        setBEmpty:function(){
            this.fundMoneyB="";
        }
    }
}
</script>
<style>



</style>
