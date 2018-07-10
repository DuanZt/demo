import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import config from '../config'

Vue.use(Router)

export default new Router({
  mode: 'history', // 开启html5 history 模式
  base: config.path, // 设置根目录
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
