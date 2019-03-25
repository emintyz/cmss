
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
// // 按需导入Mint-UI中的组件(固定头部，轮播图,按钮，懒加载)
// import { Header,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)
// 导入全部mintui
import MintUI from 'mint-ui'
Vue.use(MintUI)


// 导入MUI的样式表
import './lib/mui/css/mui.min.css'
// 导入MUI的扩展字体图标样式表
import './lib/mui/css/icons-extra.css'

// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function (datastr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(pattern)
})

// 全局设置post请求时表单的数据格式组织形式  application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// 安装图片预览插件
import VuePreview from 'vue-preview' 
Vue.use(VuePreview)

// vm实例
var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: h => h(App),
    router
})