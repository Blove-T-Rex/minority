import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// import Login from '../components/login'
import Matrix from '../components/matrix'
import Post from '../components/post'
import Famil from '../components/famil'
// import Series from '../components/series'
import Detail from '../components/detail'
import Poss from '../components/poss'
import Updates from '../components/updates'
import Columns from '../components/columns'
export default new Router({
   mode:"history",
  routes: [
    // {
    //   path: '/login',//登录
    //   component: Login
    // },
    // {
    //   path: '/join',//注册
    //   component: Jion
    // },
    // {
    //   path: '/topics',//专题广场
    //   component: Topics
    // },
    // {
    //   path: '/topic/:id',//专题广场的详情页
    //   component: Topic
    // },
    {
      path: '/matrix',//
      component: Matrix
    },
    {
      path: '/post/:id',////matrix的详情页
      component: Post
     
    },
    
    {
      path: '/famil/:id',//
      component: Famil
    },
    // {
    //   path: '/series',//付费栏目
    //   component: Series
    // },
    // {
    //   path: '/series/:id',//付费栏目详情页
    //   component: Series
    // },
    // {
    //   path: '/tag/:id',//
    //   component: Tag
    // },
    {
        path:'/detail/:id',
        component:Detail,
        children:[
            {
                path:'updates',
                name:Updates,
                component:Updates
            },
            {
                path:'poss',
                
                component:Poss
            },
            {
                path:'columns',
                component:Columns
            },
            {
                path:'/detail/:id',

                redirect:'/detail/:id/updates'
            }
        ]
    },


  ]
})
