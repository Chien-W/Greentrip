import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Activity from '../views/Activity'
import Shop from '../views/Shop'
import Mine from '../views/Mine'
import tianfutong from "../components/shop/jiaotongka"
import tool from "../components/shop/tool"
import property from "../components/shop/property"
import Found from '../views/Found.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/found',
    component: Found,
  },
  {
    path: '/activity',
    component: Activity,
  },
  {
    path: '/shop',
    component: Shop,
    children: [{
      name: 'tab_tianfutong',
      path: 'tianfutong',
      component: tianfutong
    }, {
      name: 'tab_tools',
      path: 'tools',
      component: tool
    }, {
      name: 'tab_property',
      path: 'property',
      component: property
    }, {
      path: '',
      component: tianfutong
    }
    ]
  },
  {
    path: '/mine',
    component: Mine,
  }

]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }
    if(to.path.length > 6){
      return 
    }
    return { x: 0, y: 0 }
  }
})

export default router
