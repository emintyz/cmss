
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


// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 获取本地存储的car
var car = JSON.parse(localStorage.getItem('car') || [] )
// 创建Vuex实例
var store = new Vuex.Store({
    state: {
        // 将购物车中的商品，用一个数组存储起来
        car: car
    },
    mutations: {
        // 加入购物车方法
        addToCar (state,goodsinfo){
            var flag = false
            // 如果购物车里已经有了，就只增加数量
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            // 如果购物车里没有，则添加到数组中
            if(flag == false){
                state.car.push(goodsinfo)
            }
            // 在本地存储购物车数据
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters: {
        // 实现购物车徽标的自动刷新
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        }
    }
})


// vm实例
var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: h => h(App),
    router,
    store
})