import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
// splitted and lazy load the component
// const Hello = reslove => { require(['components/Hello'], reslove) }

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
