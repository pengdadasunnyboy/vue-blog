import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/components/Home'
import About from '@/components/About'
import Note from '@/components/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
		{
			path:'/index',
			name:'index',
			components:{
				header:Header,
				main:Home
			}
		},
		{
			path:'/about',
			name:'about',
			components:{
				header:Header,
				main:About
			}
		},
		{
			path:'/note',
			name:'note',
			components:{
				header:Header,
				main:Note
			}
		}
  ]
})
