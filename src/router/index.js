import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/pages/Home/Home'
import Find from '@/components/pages/Find/Find'
import Mine from '@/components/pages/Mine/Mine'
import Order from '@/components/pages/Order/Order'
import Resturant from '@/components/pages/Resturant/Resturant'
      import OrderEat from '@/components/pages/Resturant/OrderEat/OrderEat'
      import Comment from '@/components/pages/Resturant/Comment/Comment'
      import Shop from '@/components/pages/Resturant/Shop/Shop'

import HomeMain from '@/components/pages/HomeMain/HomeMain'
import NotFound from '@/components/pages/NotFound/NotFound'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    { 
    	path: '/', 
    	redirect: '/home-main'
    },
    { 
    	path: '/home-main',
    	component: HomeMain,
    	    children:[
              		{ 
          		    	path: '', 
          		    	redirect: '/home'
          		    },
              		{
          			    path: '/home', 
          			    name: 'home', 
          			    component: Home
          		 	},
              		{
          			    path: '/mine', 
          			    name: 'mine', 
          			    component: Mine
          		 	},
              		{
          			    path: '/find', 
          			    name: 'find', 
          			    component: Find
          		 	},
            		{
        			    path: '/order', 
        			    name: 'order', 
        			    component: Order
        		 	}
        	]
    }, 
    {
      path : '/restaurant',
      component: Resturant,
         children:[
                  { 
                    path: '', 
                    redirect: '/order-eat'
                  },
                  {
                    path: '/order-eat', 
                    name: 'order-eat', 
                    component: OrderEat
                  },
                  {
                    path: '/comment', 
                    name: 'comment', 
                    component: Comment
                  },
                  {
                    path: '/shop', 
                    name: 'shop', 
                    component: Shop
                }
          ]

    },   
    { 
    	path: '/not-found',
     	name: 'not-found', 
     	component: NotFound
 	  },
    {
     	path: '**', 
     	redirect: 'not-found'
    }
  ]
})
