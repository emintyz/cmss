
// 导入Vue-Router
import VueRouter from 'vue-router'
// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

// 路由对象
var router = new VueRouter({
    routes: [
        { path: '/',redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
    ],
    // 将默认的类(router-link-active)替换为MUI中的(mui-active)，实现高亮显示
    linkActiveClass: 'mui-active'
})

// 将路由对象暴露出去
export default router