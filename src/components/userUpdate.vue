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
              <input type="email" id="user-name" v-model="register.name" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-password" class="col-sm-3 am-form-label">输入原密码</label>
            <div class="col-sm-9">
              <input type="password" id="user-password" v-model="oldpassword" value="">
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
              <input type="password" id="user-password" v-model="cfpassword" value="">
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
              <input type="email" id="user-phone" v-model="register.phoneNumber" value="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-QQ" class="col-sm-3 am-form-label">性别</label>
            <div class="col-sm-9">
              <div class="col-sm-10">
            <form action="" method="get"> 
                <label><input @click="getSex" name="sex" type="radio" v-model="register.sex" value="male"/>男 </label> 
                <label><input @click="getSex" name="sex" type="radio" v-model="register.sex" value="female"/>女 </label> 
            </form> 

          </div>
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-weibo" class="col-sm-3 am-form-label">联系地址</label>
            <div class="col-sm-9">
              <input type="email" id="user-weibo" v-model="register.address" value="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-intro" class="col-sm-3 am-form-label">职业</label>
            <div class="col-sm-9">
              <input type="email" id="user-weibo" v-model="register.profession" value="">
            </div>
          </div>

          <div class="am-form-group">
            <div class="col-sm-9 col-sm-push-3">
              <button type="button" class="am-btn am-btn-primary" v-on:click="xg">提交修改</button>
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
                email:"",
                phoneNumber:"",
                sex:"",
                address:"",
                profession:"",
        },
        cfpassword:"",
        oldpassword:"",
        Password:"",
        }
    },
    methods:{
        getSex(event){
        var radioSex=event.target.value;
        this.register.sex=radioSex;
      },
        xg:function(){
        var RegisterD=this.register;
        RegisterD.userId=localStorage.getItem("userId");
        this.Password=localStorage.getItem("password");

        if(this.register.password!=""){
            if(this.Password!=this.oldpassword){alert("原密码错误，修改失败");}
            else if(RegisterD.password!=this.cfpassword){alert("密码确认错误，请重新输入");}
            else {
            axios.post("http://192.168.137.173:8888/bank/userinfo/update",RegisterD).then(
                res=>{
                    alert("修改成功");
                    localStorage.setItem("password",RegisterD.password);
                    RegisterD.name="";
                    RegisterD.password="";
                    RegisterD.email="";
                    RegisterD.phoneNumber="";
                    RegisterD.sex="";
                    RegisterD.address="";
                    RegisterD.profession="";
                    this.oldpassword="";
                    this.cfpassword="";
                }
            )
        }
        }else{
            axios.post("http://192.168.137.173:8888/bank/userinfo/update",RegisterD).then(
                res=>{
                    alert("修改成功");
                    RegisterD.name="";
                    RegisterD.password="";
                    RegisterD.email="";
                    RegisterD.phoneNumber="";
                    RegisterD.sex="";
                    RegisterD.address="";
                    RegisterD.profession="";
                    this.oldpassword="";
                    this.cfpassword="";
                }
            )
        }
        }
}
    }
</script>
<style scoped>

.admin-content{
    height:100%;
}
</style>
