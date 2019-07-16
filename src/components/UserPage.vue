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
      <div class="am-panel-bd">
        <p><span class="am-icon-bookmark"></span> 用户</p>
        <img style="width:60%;height:60%;" src="../assets/userPic.jpg">
      </div>
    </div>
    <ul class="am-list admin-sidebar-list">
      <li v-on:click="ui"><a><span class="am-icon-home"></span> 用户基本信息</a></li>
      <li v-on:click="uu"><a><span class="am-icon-pencil-square-o"></span> 用户信息修改</a></li>
      <li v-on:click="mf"><a><span class="am-icon-table"></span> 我的基金产品</a></li>
      <li v-on:click="af"><a><span class="am-icon-table"></span> 基金产品展示</a></li>
    </ul>
  </div>
  <!-- sidebar end -->

  <!-- content start -->
  <div class="col-md-8 column" style="height:405px;">
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
          tab:userInfo
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