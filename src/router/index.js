import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableMain from '@/components/TableMain'
import LoginPage from '@/components/LoginPage'
import UserPage from '@/components/UserPage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TableMain',
      name: 'Table',
      component: TableMain
    },
    {
      path: '/HelloWorld',
      name: 'hw',
      component: HelloWorld
    },
    {
      path: '',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/UserPage',
      name: 'UserPage',
      component: UserPage
    }
    
  ]
})