import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import ToDoBox from '@/components/ToDoBox'

Vue.component('my-header',Header)
// Vue.component('my-footer',Footer)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Test',
      component: Test
    },
    {
      path: '/',
      component: ToDoBox
    },
    {
      path: '/myList',
      component: List
    },
    {
      path: '/myDetail/:myIndex',
      component: Detail
    }
  ]
})
