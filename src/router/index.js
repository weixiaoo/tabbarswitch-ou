import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/main/one'}, // 路由重定向
    { 
      path :"/main",component:()=>import("../views/Main"),
      children:[
        {path:'one',component:()=>import('../pages/One')},
        {path:'two',component:()=>import('../pages/Two')},
        {path:'three',component:()=>import('../pages/Three')}
      ] 
    },
    { path :"/list",component:()=>import("../views/List")},
    { path :"/mine",component:()=>import("../views/Mine")}
  ]
})
