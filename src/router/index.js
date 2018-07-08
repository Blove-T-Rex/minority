import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Topics from "../components/topics"
import Topic from "../components/topic"
import Home from "../components/home"
import Tag from "../components/tag"
// --------------------
import Matrix from '../components/matrix'
import Post from '../components/post'
import Famil from '../components/famil'
import Detail from '../components/detail'
import Poss from '../components/poss'
import Updates from '../components/updates'
import Columns from '../components/columns'
//-----------------------
import Login from '../components/login'
import Join from '../components/join'

export default new Router({
  routes: [
  		{
  			path:'/',
  			component:Home
  		},
	    {
	      path: '/login',//登录
	      component: Login
	    },
	    {
	      path: '/join',//注册
	      component: Join
	    },
	    {
	      path: '/topics',//专题广场
	      component: Topics
	    },
	    {
	      path: '/topic/:id',//专题广场的详情页
	      component: Topic
	    },
	    {
	      path: '/matrix',//
	      component: Matrix
	    },
	    {
	      path: '/post/:id',////matrix的详情页
	      component: Post
	    },
	    {
	      path: '/famil/:id',
	      component: Famil
	    },
//     {
//       path: '/series/:id',//付费栏目详情页
//       component: Series
//     },
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
	    {
	      path: '/tag/:id',//
	      component: Tag
	    },
		{
			path:'*',
			redirect:'/'
		}

  ]
})
