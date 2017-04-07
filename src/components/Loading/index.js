//引入自定义loading组件
import LoadingComponent1 from './loading1.vue'
import LoadingComponent2 from './loading2.vue'

//这是一个json 也就是一个对象
const Loading = {
	//这个对象身上有一个默认的方法 叫做install  默认传入的一个参数  
	//外界调用的时候就回默认调用install方法
	install: function(Vue) {
		//vue-loading 是使用时的名字   LoadingComponent是组件名字
		Vue.component('vue1-loading', LoadingComponent1);
		Vue.component('vue2-loading', LoadingComponent2);
		

	}

}
//导出这个对象
export default Loading