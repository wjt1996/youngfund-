<template>
    <div class="admin-content">
    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">个人资料</strong> / <small>Personal information</small></div>
    </div>

    <hr/>

    <div class="am-g">

      <div class="col-sm-12 col-md-4 col-md-push-8">
      </div>

      <div class="col-sm-12 col-md-8 col-md-pull-4">
        <form class="am-form am-form-horizontal">
          <div class="am-form-group">
            <label for="user-name" class="col-sm-3 am-form-label">用户姓名</label>
            <label class="col-sm-9">{{username}}</label>
          </div>

          <div class="am-form-group">
            <label for="user-email" class="col-sm-3 am-form-label">电子邮件</label>
            <label class="col-sm-9">{{email}}</label>
          </div>

          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">联系电话</label>
            <label class="col-sm-9">{{phonenumber}}</label>
          </div>

          <div class="am-form-group">
            <label for="user-QQ" class="col-sm-3 am-form-label">注册时间</label>
            <label class="col-sm-9">{{registerdate}}</label>
          </div>

          <div class="am-form-group">
            <label for="user-weibo" class="col-sm-3 am-form-label">个人存款</label>
            <label class="col-sm-9">{{deposit}}元</label>
          </div>

          <div class="am-form-group">
            <label for="user-intro" class="col-sm-3 am-form-label">性别</label>
            <label class="col-sm-9">{{sex}}</label>
          </div>

          <div class="am-form-group">
            <label for="user-intro" class="col-sm-3 am-form-label">联系地址</label>
            <label class="col-sm-9">{{address}}</label>
          </div>

          <div class="am-form-group">
            <label for="user-intro" class="col-sm-3 am-form-label">职业</label>
            <label class="col-sm-9">{{profession}}</label>
          </div>

        </form>
      </div>
    </div>

    </div>
</template>
<script>
export default {
    name:"userInfo",
    data(){
        return{
            username:"小红",
            email:"123456@qq.com",
            phonenumber:"12345678901",
            registerdate:"2019-07-12",
            deposit:"10000",
            sex:"女",
            address:"浙江杭州XXXXXX",
            profession:"护士"

        }
    },
    created(){
        this.$axios("http://192.168.137.173:8888/bank/userInfo/select/"+localStorage.getItem("userId")).then(
            res=>{
                var Info=res.data;
                console.log(Info);
            }
        );
    }
}
</script>
<style>

</style>
