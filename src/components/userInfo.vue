<template>
    <div class="admin-content" style="overflow-y:scroll; white-space:nowrap;">
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
            <label for="user-name" class="col-sm-3 am-form-label">用户名</label>
            <label class="col-sm-9">{{username}}</label>
          </div>
          <div class="am-form-group">
            <label for="user-name" class="col-sm-3 am-form-label">真实姓名</label>
            <label class="col-sm-9">{{truename}}</label>
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
            username:"",
            truename:"",
            email:"",
            phonenumber:"",
            registerdate:"",
            deposit:"",
            sex:"",
            address:"",
            profession:"",
            uid:{'userId':0}
        }
    },
    created(){
        var uId=localStorage.getItem("userId");
        this.uid.userId=uId;
        axios.post("http://192.168.137.173:8888/bank/userinfo/select",this.uid).then(
            res=>{
                var Info=res.data;
                this.username=Info.userName;
                this.truename=Info.name;
                this.email=Info.email;
                this.phonenumber=Info.phoneNumber;
                this.registerdate=Info.registerDate;
                this.deposit=Info.deposit;
                if(Info.sex=="male"){this.sex="男";}else if(Info.sex=="female"){this.sex="女";}
                this.address=Info.address;
                this.profession=Info.profession;
            }
        );
    }
}
</script>
<style>

</style>
