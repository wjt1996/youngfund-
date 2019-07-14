<template>
            
          <form action="" id="form">
            <div id="logo2">
                <img src="../assets/CZBANK2logo.jpg">
            </div>
            <div id="login">
            <div class="col-sm-12 col-md-4 col-md-push-4">
                <form class="am-form am-form-horizontal">
                <div class="am-form-group">
                    <label for="user-name" class="col-sm-3 am-form-label">账号</label>
                    <div class="col-sm-9">
                        <input v-model="login.logName" type="text" name="" id="" value="" />
                    </div>
                </div>

                <div class="am-form-group">
                    <label for="user-email" class="col-sm-3 am-form-label">密码</label>
                    <div class="col-sm-9">
                        <input v-model="login.password" type="password" name="" id="" value="" />
                    </div>
                </div>
                </form>
            </div> 
            </div>
<div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
			 <a id="modal-814974" href="#modal-container-814974" role="button" class="btn" data-toggle="modal">注册账号</a>
			
			<div class="modal fade" id="modal-container-814974" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title" id="myModalLabel">
								用户注册
							</h4>
						</div>
						<div>
							<div class="col-sm-12 col-md-8">
        <form class="am-form am-form-horizontal">
          <div class="am-form-group">
            <label for="user-name" class="col-sm-3 am-form-label">用户名</label>
            <div class="col-sm-9">
              <input type="email" id="user-name" v-model="register.userName" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-password" class="col-sm-3 am-form-label">密码</label>
            <div class="col-sm-9">
              <input type="password" id="user-password" v-model="register.password" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-password" class="col-sm-3 am-form-label">确认密码</label>
            <div class="col-sm-9">
              <input type="password" id="user-password2" v-model="cfpassword" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-Name" class="col-sm-3 am-form-label">姓名</label>
            <div class="col-sm-9">
              <input type="email" id="user-Name" v-model="register.name" value="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-email" class="col-sm-3 am-form-label">电子邮件</label>
            <div class="col-sm-9">
              <input type="email" id="user-email" v-model="register.email" value="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">联系电话</label>
            <div class="col-sm-9">
              <input type="email" id="user-phone" v-model="register.phoneNumber" value="">
            </div>
          </div>
          <div class="am-form-group">
            <label for="user-address" class="col-sm-3 am-form-label">联系地址</label>
            <div class="col-sm-9">
              <input type="email" id="user-address" v-model="register.address" value="">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-profession" class="col-sm-3 am-form-label">职业</label>
            <div class="col-sm-9">
              <input type="email" id="user-profession" v-model="register.profession" value="">
            </div>
          </div>
          
          <div class="am-form-group">
            <label for="user-sex" class="col-sm-3 am-form-label">性别</label>
            <div class="col-sm-9">
              <div class="col-sm-10">
            <form action="" method="get"> 
                <label><input @click="getSex" name="sex" type="radio" v-model="register.sex" value="male"/>男 </label> 
                <label><input @click="getSex" name="sex" type="radio" v-model="register.sex" value="female"/>女 </label> 
            </form> 

          </div>
            </div>
          </div>
             <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> <button type="button" v-on:click="zc" class="btn btn-primary" data-dismiss="modal">注册</button>

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
            <button v-on:click="dl" type="button" class="btn btn-default">登录</button>
        </form>

</template>

<script>
import axios from "axios"
import qs from 'qs'
  export default {
    name: "table-main",
    data() {
      return {
        login:[{logName:"",
                password:""}],
        register:{
            userName:"",
            password:"",
            name:"",
            email:"",
            phoneNumber:"",
            sex:"",
            address:"",
            profession:"",
        },
        cfpassword:""
      }
    },
    methods:{
      getSex(event){
        var radioSex=event.target.value;
        this.register.sex=radioSex;
      },  
      dl: function() {
           var Name=this.login.logName
           var Password= this.login.password
           
            axios.post('http://192.168.137.173:8888/bank/login/select',
            {'logName':Name,'password':Password}
            ).then((res)=>{
                var Result=res.data;
                if(Result.flag){
                        alert("登录成功");
                        localStorage.setItem("userId",Result.userId);
                        localStorage.setItem("password",Password);
                        this.$router.push({name: 'UserPage'})
                    }
                    else{
                        alert("账号密码错误，登录失败！");
                    }

                    
});
},zc:function(){
        var RegisterD=this.register
        console.log(JSON.stringify(RegisterD));
        if(RegisterD.userName==""){alert("用户名不能为空")}
        else if(RegisterD.password!=this.cfpassword){
            alert("密码和确认密码不一致");
        }else{
            axios.post("http://192.168.137.173:8888/bank/userinfo/insert",RegisterD).then(
                res=>{
                    console.log(JSON.stringify(res));
                }
            )
        }
}

    }
}

</script>

<style>
#logo2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position:absolute;
  top:2%;
  left:2%;
}

</style>