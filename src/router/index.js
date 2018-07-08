import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Tag from '../components/tag'
import Login from '../components/login'
import Join from '../components/join'

export default new Router({

 
  routes: [
//   	{
//   	  path: '/',
//   	  component: Home
//   	},
    {
      path: '/login',//登录
      component: Login
    },
    {
      path: '/join',//注册
      component: Join
    },
//     {
//       path: '/topics',//专题广场
//       component: Topics
//     },
//     {
//       path: '/topic/:id',//专题广场的详情页
//       component: Topic
//     },
//     {
//       path: '/matrix',//
//       component: Matrix
//     },
//     {
//       path: '/post/:id',////matrix的详情页
//       component: Post
//     },
//     {
//       path: '/series',//付费栏目
//       component: Series
//     },
//     {
//       path: '/series/:id',//付费栏目详情页
//       component: Series
//     },
    {
      path: '/tag/:id',//
      component: Tag
    },
    // {
    //   path: '*',//
    //   redirect: Home
    // }

  ]
})
