<template>
	<div id="app">
		<!--防止闪烁-->
		<div v-cloak>
			{{ message }}
		</div>
		<Navnav :seller="seller" v-show="headerShow"></Navnav>

		<vue1-loading v-show="loading"></vue1-loading>
		<!--keep-alive表示路由保持当前的状态 不会再加载loading-->
		<keep-alive>
			<transition enter-active-class="animated slideInDown">
				<!--可以把数据传递给路由-->
				<router-view :seller="seller"></router-view>
			</transition>
		</keep-alive>
	</div>
</template>

<script>
	//固定导航组件
	import Navnav from './components/Navnav.vue'
	//	import HomePage from './components/HomePage.vue'
	//vuex
	import { mapGetters, matActions } from 'vuex'

	//	import data from './mock/mock';
	const ERR_Ok = 0;
	var hh;
	export default {
		computed: mapGetters([
			'headerShow',
			'loading',
		]),
		//当路由发生变化的时候 监听路由变化
		watch: {
			$route(to, from) {
				//				alert(0);
				//				console.log(to, from);
				if(to.path == '/login' || to.path == '/register') {
					//然后通知actions 告诉他 headerShow因该消失了
					//这个store是从main.js注册里面来的
					//					dispatch 发起请求
					//在actions.js写showHeader方法
					this.$store.dispatch('hideHeader');
				} else {
					this.$store.dispatch('showHeader');
				}

			}
		},
		name: 'app',
		components: {
			Navnav,
			//			HomePage
		},
		data() {
			return {
				//防止闪烁
				message: "",
				//这是一个对象
				//存储数据
				seller: {},
				//				goods:[]
			}
		},
		methods: {
			//			fetchData:function(){
			//					this.$http.get('/api/goods', [
			//				]).then(function(res) {
			//					res = res.body;
			//					if(res.errno === ERR_Ok) {
			//						this.goods = res.data;
			//					}
			//				}, function(res) {
			//					console.log(res.status);
			//			});
			//			}
		},
		created() {

			//			this.fetchData();
		},
		//mock数据
		//		created() {
		//			console.log('实例已经创建完成');
		//			this.$http.get('http://g.cn').then((response) => {
		////				 get body data
		//				  this.someData = response.body;
		//				console.log(this.someData);
		//
		//			}, (response) => {
		//				// error callback
		//			});
		//		}
		mounted() {
			//get交互  获取普通文本数据
			//语法就是这样 第一个函数表示成功 第二个函表示失败
			//then方法里面有两个参数
			//		this.$http.get('/api/seller').
			//			var  _this=this;
			//			console.log('模板创建完成');
			//				this.$store.dispatch('showLoading');
			this.$http.get('/api/seller', []).then(function(res) {
				//返回状态码
				//获取数据
				//console.log(res.data);
				//拿到返回的json对象  赋值给res
				res = res.body;
				//判断返回码
				if(res.errno === ERR_Ok) {
					this.seller = res.data;
					// this.seller = Object.assign({}, this.seller, res.data);
					//					console.log(this.seller);
				}
			}, function(res) {
				console.log(res.status);
			});
		}
	}
</script>

<style lang="less">
	/*防止闪烁*/
	
	[v-cloak] {
		display: none;
	}
	
	body {
		width: 100%;
		height: 0px;
		font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "WenQuanYi Micro Hei", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
	}
	/*防止详情页不能点击*/
	
	#app {
		width: 100%;
		height: 56px;
	}
	
	html {
		font-size: 62.5%;
		color: #222;
	}
</style>