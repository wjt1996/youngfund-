<template>
    <div class="admin-content" style="overflow-y:scroll; white-space:nowrap;">
        <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">资料修改</strong> / <small>Information Update</small></div>
    </div>

    <hr/>

    <div class="am-g">

      <div class="col-sm-12 col-md-4 col-md-push-8">
      </div>

      <div class="col-sm-12 col-md-8 col-md-pull-4">
        <form class="am-form am-form-horizontal">
          <div class="am-form-group">
            <label for="user-name" class="col-sm-3 am-form-label">姓名</label>
            <div class="col-sm-9">
              <input type="password" id="user-name" placeholder="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-password" class="col-sm-3 am-form-label">输入原密码</label>
            <div class="col-sm-9">
              <input type="password" id="user-password"  value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-password" class="col-sm-3 am-form-label">输入新密码</label>
            <div class="col-sm-9">
              <input type="password" id="user-password" v-model="register.password" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-password" class="col-sm-3 am-form-label">确认新密码</label>
            <div class="col-sm-9">
              <input type="password" id="user-password" value="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-email" class="col-sm-3 am-form-label">电子邮件</label>
            <div class="col-sm-9">
              <input type="email" id="user-email" v-model="register.email">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">联系电话</label>
            <div class="col-sm-9">
              <input type="email" id="user-phone" placeholder="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-QQ" class="col-sm-3 am-form-label">性别</label>
            <div class="col-sm-9">
              <div class="col-sm-10">
            <form action="" method="get"> 
                <label><input name="sex" type="radio" value="" />男 </label> 
                <label><input name="sex" type="radio" value="" />女 </label> 
            </form> 

          </div>
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-weibo" class="col-sm-3 am-form-label">联系地址</label>
            <div class="col-sm-9">
              <input type="email" id="user-weibo" placeholder="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-intro" class="col-sm-3 am-form-label">职业</label>
            <div class="col-sm-9">
              <input type="email" id="user-weibo" placeholder="">
            </div>
          </div>

          <div class="am-form-group">
            <div class="col-sm-9 col-sm-push-3">
              <button type="button" class="am-btn am-btn-primary" v-on:click="xg">保存修改</button>
            </div>
              
          </div>
        </form>
      </div>
    </div>

    </div>
</template>
<script>
export default {
    name:"userUpdate",
    data(){
        return{
            register:{
                userId:0,
                name:"",
                password:"",
                name:"",
                email:"",
                phoneNumber:"",
                sex:"",
                address:"",
                profession:"",
        }
        }
    },
    methods:{
        xg:function(){
        var RegisterD=this.register
        this.register.userId=localStorage.getItem("userId");
        console.log(JSON.stringify(RegisterD));
            axios.post("http://192.168.137.173:8888/bank/userinfo/update",RegisterD).then(
                res=>{
                    console.log(JSON.stringify(res));

                }
            )
        }
}
    }
</script>
<style scoped>

.admin-content{
    height:100%;
}
</style>
