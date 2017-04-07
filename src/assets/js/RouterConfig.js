//引入组件	
//注意路径
import HomePage from '../../components/HomePage.vue'
import Download  from  '../../components/Download.vue'
import Login  from  '../../components/Login.vue'
import Register  from  '../../components/Register.vue'
import Detail from '../../components/Detail.vue'
//导出组件
export default [
        { path: '/home', component: HomePage,
        //子路由
//      	     children:[
                //子路由写子路由的组件
//                  {path:'detail', component:Detail}
//              ]
        },
    	{ path: '/download', component: Download },
    	{path:'/login',component:Login},
    	{path:'/register',component:Register},
    	//文章详情页
    	  {path:'/detail/:id', component:Detail},
//  	  {path:'/detail/:id', component:Detail},
    	//路由重定向
    	{path:'/',redirect:'/download'},
    	//404
   		{ path: '*', redirect: '/download' }
]
