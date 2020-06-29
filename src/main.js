// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//移动端滑动
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)　

// 将axios对象全局化(引入axios)
import axios from 'axios'
// 将axios绑定到Vue原型
Vue.prototype.$axios = axios
// 引入全局组件
import Loading from '@/components/Loading'
// 全局组件的使用
Vue.component("Loading",Loading)

//vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
Loading:'/static/img/loading.gif'
})




// 请求拦截器  （axios拦截去请求使用）
axios.interceptors.request.use(
  config => {
    console.log(store.state)
    // config代表的是你请求的一些信息，可以在这里打印一下
    // 改变vuex中的isLoading状态数据 为true的时候显示
    store.state.Loading = true
    return config;
  },
  error => {
    // 异常的时候触发
    return Promise.error(error);
  }
);
// 响应拦截去
axios.interceptors.response.use(
  response => {
    console.log(response)
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
     store.state.Loading = false
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      return Promise.reject(error.response);
    }
  }
);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
