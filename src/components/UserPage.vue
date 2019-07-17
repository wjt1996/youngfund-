<template>
  <div class="layout col-md-12.column.ui-sortable" style="height:100%">
    <header class="am-topbar admin-header">
  <div class="am-topbar-brand">
    <strong>青春基金</strong> <small>用户系统</small>
  </div>
</header>

<div class="am-cf admin-main col-md-12.column.ui-sortable">
  <!-- sidebar start -->
  <div class="container">
	<div class="row clearfix">
  <div class="admin-content col-md-4 column">
    <div class="am-panel am-panel-default admin-sidebar-panel">
      <div class="am-panel-bd" style="height:250px;">
        <p><span class="am-icon-bookmark"></span> 用户</p>
        <img style="width:70%;height:70%;" src="../assets/userPic.jpg">
        <div class="col-md-12 column">			
			<div class="modal fade" id="modal-container-11" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title" id="11">
								
							</h4>
						</div>
						<div>
							<div class="col-sm-12 col-md-8">
        <form class="am-form am-form-horizontal"> 
          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">存入钱包</label>
            <div class="col-sm-9">
              <input type="email" id="fund-money" v-on:click="setSEmpty" v-model="fundMoneyB" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">存款取出</label>
            <div class="col-sm-9">
              <input type="email" id="fund-money" v-on:click="setBEmpty" v-model="fundMoneyS" value="">
            </div>
          </div>
             <button type="button"  class="btn btn-primary" v-on:click="buy" data-dismiss="modal">存入</button>
             <button type="button"  class="btn btn-primary" v-on:click="sale" data-dismiss="modal">取出</button>
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
    <ul class="am-list admin-sidebar-list">
      <li><a id="modal-11" href="#modal-container-11" role="button" class="btn" data-toggle="modal"><span></span> 我 的 钱 包</a></li>
      <li v-on:click="ui"><a><span class="am-icon-home"></span> 用户基本信息</a></li>
      <li v-on:click="uu"><a><span class="am-icon-pencil-square-o"></span> 用户信息修改</a></li>
      <li v-on:click="mf"><a><span class="am-icon-table"></span> 我的基金产品</a></li>
      <li v-on:click="af"><a><span class="am-icon-table"></span> 基金产品展示</a></li>
    </ul>
  </div>
  <!-- sidebar end -->
  <!-- content start -->
  <div class="col-md-8 column" style="height:500px;">
    <component :is="tab"></component>
  </div>
	</div>
  </div>
  <!-- content end -->

</div>
  </div>
</template>
<!--!<script src="../assets/js/zepto.min.js"></script>
<script src="../assets/js/amazeui.min.js"></script>
<script src="../assets/js/app.js"></script>!-->

<script>
import axios from "axios"
import qs from 'qs'
import userInfo from './userInfo.vue';
import userUpdate from './userUpdate.vue';
import MyFund from './MyFund.vue';
import AllFund from './AllFund.vue';

  export default {
    name: "UserPage",
    data() {
      return {
        tab:userInfo,
        uid:{'userId':0,
             'deposit':"",
        },
        fundMoneyB:"",
        fundMoneyS:"",
      }
    },
    components:{
        userInfo,userUpdate,MyFund,AllFund
    },
    methods:{
        ui:function(){
            this.tab=userInfo;
        },
        uu:function(){
            this.tab=userUpdate;
        },
        mf:function(){
            this.tab=MyFund;
        },
        af:function(){
            this.tab=AllFund;
        },
        buy:function(){
            var uId=localStorage.getItem("userId");
        this.uid.userId=uId;
            if(this.fundMoneyB==""){alert("请输入存款金额");}
            else{
                this.uid.deposit=this.fundMoneyB;
                console.log(this.uid);
                axios.post("http://192.168.137.173:8888/bank/userinfo/depositadd",this.uid).then(res=>{
                    {
                      this.tab=userInfo;
                      alert("存款成功！！！");}
                });
                this.tab=userUpdate;
                this.fundMoneyB="";
                
            }
        },
        sale:function(){
          var uId=localStorage.getItem("userId");
        this.uid.userId=uId;
            if(this.fundMoneyS==""){alert("请输入取出金额");}
            else{
                this.uid.deposit=this.fundMoneyS;
                axios.post("http://192.168.137.173:8888/bank/userinfo/depositcut",this.uid).then(res=>{
                    if(res.data.flag==false){alert("资产不足，取出失败");}
                    else{
                      this.tab=userInfo;
                      alert("取出成功！！！");}
                });
                this.tab=userUpdate;
                this.fundMoneyS="";
                
            }
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

<style scoped>

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }
  userUpdate{
      display: none;
  }
</style>