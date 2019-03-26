<template>
    <!-- 商品详情页面 -->
    <div class="goodsinfo-container">
        <!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <!-- 通过给轮播图传递一个布尔值控制是否应用宽度100%的样式 -->
                <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
            </div>
        </div>
        <!-- 商品购买 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <del>￥2999</del>&nbsp;&nbsp;&nbsp;&nbsp;
                        销售价：
                        <span class="new">￥2199</span>
                    </p>
                    <div class="count">
                        购买数量：
                        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1">
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <!-- 商品参数 -->
        <div class="mui-card">
            <div class="mui-card-header">商品详情</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.goods_quantity }}件</p>
                    <p>上架时间：{{ goodsinfo.goods_add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
// 导入轮播图
import swiper from "../subcomponents/swiper.vue";
// 导入mui
import mui from  '../../lib/mui/css/mui.min.css'
export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbotuList: [],
            goodsinfo: {
                title: '华为Mate20 Pro',
                goods_no: 120545321854,
                goods_quantity: 60,
                goods_add_time: '2018-12-30 12:36:26'
            }
        }
    },
    mounted (){
        // 初始化数字选择框
        // mui(".mui-numbox").numbox()
    },
    methods: {
        getLunBoTu() {
            // this.$http.get('').then(result => {
            //     if(result.body.ststus === 0){
            //         this.lunbotuList = result.body.message
            //     }
            // })
        },
        // 获取商品详情
        getGoodsInfo(){
            
        },
        // 编程式导航--跳转到图文详情
        goDesc (id){
            this.$router.push({name: 'goodsdesc',params: {id} })
        },
        // 跳转到商品评论
        goComment (id){
            this.$router.push({name: 'goodscomment',params: {id} })
        }
    },
    // 注册轮播图
    components: {
        swiper: swiper
    }
};
</script>

<style scoped>
.mui-card-content-inner .price {
    color: #000;
}
.mui-card-content-inner .new {
    font-size: 18px;
    color: red;
}
.mui-card-content-inner .count {
    color: #000;
    margin-bottom: 8px;
}
/* 取消页尾默认的flex布局 */
.mui-card-footer {
    display: block;
}
.mui-card-footer button {
    margin-bottom: 10px;
}
</style>


