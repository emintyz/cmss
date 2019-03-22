
import './css/index.css'

// 导入Vue
import Vue from 'vue'
import App from './App.vue'

// 导入Vue-Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 接收路由对象
import router from './router.js'


// 导入mint-ui组件的样式表
import 'mint-ui/lib/style.css'
// 按需导入Mint-UI中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

// 导入MUI
import './lib/mui/css/mui.min.css'



// vm实例
var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: h => h(App),
    router
})