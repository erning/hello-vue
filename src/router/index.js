import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
// splitted and lazy load the component
// const Hello = resolve => { require(['components/Hello'], resolve) }

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
