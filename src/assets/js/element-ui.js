import Vue from 'vue'
//注意 有些组件需要依赖其他的模块 驼峰命名法  具体看报错信息
//有些组件依赖于其他组件
//按需引入element-ui组件
//轮播图组件
import {CarouselItem,Carousel} from 'element-ui'
//使用组件
Vue.use(Carousel);
Vue.use(CarouselItem);
//按钮组件
import {Button,Icon} from 'element-ui'
Vue.use(Button,Icon);
//布局组件
//row 和 col 需要分开写
import {Row} from 'element-ui'
Vue.use(Row);
import {Col} from 'element-ui'
Vue.use(Col);

