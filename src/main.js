
import './css/index.css'

// 导入Vue
import Vue from 'vue'
import App from './App.vue'

// 导入Vue-Router
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
// 接收路由对象
import router from './router.js'


// 导入mint-ui组件的样式表
import 'mint-ui/lib/style.css'
// 按需导入Mint-UI中的组件(固定头部，轮播图)
import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)


// 导入MUI的样式表
import './lib/mui/css/mui.min.css'
// 导入MUI的扩展字体图标样式表
import './lib/mui/css/icons-extra.css'

// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)




// vm实例
var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: h => h(App),
    router
})