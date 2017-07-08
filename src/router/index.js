import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Fb from '@/components/fb'
import Xx from '@/components/xx'
import My from '@/components/my'
import All from '@/pages/all'
import Fx from '@/pages/fx'
import Jh from '@/pages/jh'
import Wd from '@/pages/wd'
import Zp from '@/pages/zp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path:'all',
          component:All
        },
         {
          path:'fx',
          component:Fx
        },
         {
          path:'jh',
          component:Jh
        },
         {
          path:'wd',
          component:Wd
        },
         {
          path:'zp',
          component:Zp
        }
      ]
    },
    {
      path: '/fb',
      name: 'Fb',
      component: Fb
    },
    {
      path: '/xx',
      name: 'Xx',
      component: Xx
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
  linkActiveClass:'active'
})
