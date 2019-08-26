import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home.vue'
import Grid from '@/components/grid.vue'
import Images from '@/components/images.vue'
import LandingPage from '@/components/lp.vue'
import Accordion from '@/components/accordion.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/',
      name: 'Images',
      component: Images
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/',
      name: 'Accordion',
      component: Accordion
    }
  ]
})
