import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
require('./assets/css/reset.css') //全局引入css重置文件
require('./assets/css/animate.css')
import './assets/js/element-ui.js'
//require ('./assets/js/replacePicture.js')
//import async from  './assets/js/async.js'
import routes from './assets/js/RouterConfig.js' //引入路由配置文件
Vue.use(VueRouter);
Vue.use(VueResource);
//使用轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//import {mapGetters,matActions}  from 'vuex'
import store from './store/index'
//自定义组件  注意  导出的是文件夹
import loading from './components/Loading'
Vue.use(loading);
const router = new VueRouter({
	//去掉#
	mode: 'history',
	meta: { keepAlive: true },
	//	/每次切换路由的时候 让y轴的滚动条变成0
	scrollBehavior: () => ({ y: 0 }),
	//前一个名字不能变 后一个是引入路由配置文件的名称
	routes: routes
});

//router.beforeEach(function(transition) {
//  if (transition.to.name === '/login' && transition.from.name !== '/register') {
//      transition.redirect('/home')
//  }
//  transition.next()
//})

//vue-resource 拦截器
Vue.http.interceptors.push((request, next) => {
	request.method = 'get';
	
	
//	    setTimeout(() => {
//                      	alert('1秒');
                          console.log( store.dispatch('showLoading'));
						store.dispatch('showLoading')
//                      }, 2000);
		store.dispatch('showLoading')
	next((response) => {
//		console.log('获取数据成功');
		//加载数据之后隐藏loading
//		    setTimeout(() => {
//                      	alert('1秒');
//                        console.log( store.dispatch('hideLoading'));
						store.dispatch('hideLoading')
//                      }, 2000);
//		store.dispatch('hideLoading');　
		return response;
	});
});
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
	methods: {
		delay: () => {
			store.dispatch('showLoading');
		}
	}
})