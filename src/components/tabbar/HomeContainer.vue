<template>
    <div>
        <!-- 轮播图,传递图片数据 -->
        <swiper :lunbotuList="lunbotuList" :isfull='true'></swiper>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" alt>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
import { Toast } from "mint-ui"
// 导入轮播图
import swiper from '../subcomponents/swiper.vue'
export default {
    data() {
        return {
            // 存放轮播图的数组
            lunbotuList: []
        };
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu() {
            // // 请求轮播图图片
            // this.$http.jsonp("http://vue.studyit.io/api/getlunbo").then(result => {
            //     if (result.status === 0) {
            //         this.lunbotuList = result.body.message
            //         console.log(33696336)
            //         Toast('获取成功')
            //     } else {
            //         Toast('获取失败')
            //     }
            // })
        }
    },
    // 注册轮播图子组件
    components: {
        swiper: swiper
    }
};
</script>


<style scoped>
/* 设置六宫格背景，交集选择器 */
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
}
/* 取消六宫格默认的边框 */
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
}
/* 设置六宫格内图片大小 */
.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
    width: 60px;
    height: 60px;
}


/* 分别设置每一张图片的背景颜色
    .mint-swipe-item:nth-child(1) {
        background-color: aqua;
    }
    .mint-swipe-item:nth-child(2) {
        background-color: darkorchid;
    }
    .mint-swipe-item:nth-child(3) {
        background-color: olive;
    } */
</style>


