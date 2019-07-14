<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">IVIEW布局</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <div style="min-height: 200px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
          <form action="" id="form">

<label for="">账号<input v-model="login.logName" type="text" name="" id="" value="" /> </label> 
<label for="">密码<input v-model="login.password" type="password" name="" id="" value="" /></label> 

<input v-on:click="dj" type="button" value="提交" /> 
</form>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
import axios from "axios"
import qs from 'qs'
  export default {
    name: "table-main",
    data() {
      return {
           tableData: [],
        columns: [
          {field: 'password', title: '密码', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'email', title: '邮箱', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'registerDate', title: '发证日期', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'deposit', title: '存款', width: 280, titleAlign: 'center', columnAlign: 'left', isResize: true},
          {field: 'sex', title: '性别', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'address', title: '地址', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'phoneNumber', title: '电话号码', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'profession', title: '职业', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'userName', title: '用户名', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
        ],

        login:[{logName:"",
                password:""}]
      }
    },
    created(){
     this.$ajax.post('http://192.168.137.173:8888/select').then(res => {
        this.tableData =JSON.parse("["+ JSON.stringify(res.data)+"]");
        alert("成功访问");
        alert(JSON.stringify(res.data));
      }).catch(function (error) {
        console.log(error);
        alert("访问失败");
      });
},
  methods:{
      dj: function() {

           console.log(this.login.logName)  
           var Name=this.login.logName
           console.log(this.login.password)  
           var Password= this.login.password

            axios.post('http://192.168.137.173:8888/bank/findAll',
            {'logName':Name,'password':Password}
            ).then(function(res) {console.log(res);}).catch(function(error) {console.log(error)
});

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
</style>