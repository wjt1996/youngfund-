<template>
    <div class="admin-content">
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
              <input type="password" id="user-name" placeholder="小红">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-email" class="col-sm-3 am-form-label">电子邮件</label>
            <div class="col-sm-9">
              <input type="email" id="user-email" placeholder="123456@qq.com">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-phone" class="col-sm-3 am-form-label">联系电话</label>
            <div class="col-sm-9">
              <input type="email" id="user-phone" placeholder="12345678901">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-QQ" class="col-sm-3 am-form-label">性别</label>
            <div class="col-sm-9">
              <div class="col-sm-10">
            <form action="" method="get"> 
                <label><input name="sex" type="radio" value="" />男 </label> 
                <label><input name="sex" type="radio" checked="true" value="" />女 </label> 
            </form> 

          </div>
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-weibo" class="col-sm-3 am-form-label">联系地址</label>
            <div class="col-sm-9">
              <input type="email" id="user-weibo" placeholder="浙江杭州XXXXXX">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-intro" class="col-sm-3 am-form-label">职业</label>
            <div class="col-sm-9">
              <input type="email" id="user-weibo" placeholder="护士">
            </div>
          </div>

          <div class="am-form-group">
            <div class="col-sm-9 col-sm-push-3">
              <button type="button" class="am-btn am-btn-primary">保存修改</button>
              <button type="button" class="am-btn am-btn-primary">密码修改</button>
            </div>
              
          </div>
        </form>
      </div>
    </div>

    </div>
</template>
<script>
export default {
    name:"userUpdate"
}
</script>
<style scoped>

.admin-content{
    height:100%;
}
</style>
