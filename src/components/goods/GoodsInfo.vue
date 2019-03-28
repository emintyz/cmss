<template>
    <!-- 商品详情页面 -->
    <div class="goodsinfo-container">
        <!-- 小球动画 -->
            <transition @before-enter="beforeEnter"
                @enter="enter" @after-enter="afterEnter">
                <div class="ball" v-show="ballFlag" ref="ball"></div>
            </transition>
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
                        <span class="new">￥{{ goodsinfo.goods_price }}</span>
                    </p>
                    <div class="count">
                        购买数量：
                        <!-- 数量选择子组件 -->
                        <numbox @getCount="getSelectedCount" :max="goodsinfo.goods_quantity"></numbox>
                    </div>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
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
// 导入数量选择子组件
import goodsinfo_numbox from "../subcomponents/goodsinfo_numbox.vue";

export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbotuList: [],
            goodsinfo: {
                title: '华为Mate20 Pro',
                goods_price: 2199,
                goods_no: 120545321854,
                goods_quantity: 60,
                goods_add_time: '2018-12-30 12:36:26'
            },
            ballFlag: false,
            selectedCount: 1
        }
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
        },
        // 加入购物车
        addToShopCar (){
            this.ballFlag = !this.ballFlag 
            // 组成一个对象
            var goodsBuy = {
                id: parseInt(this.id),
                count: this.selectedCount,
                price: this.goodsinfo.goods_price,
                selected: true
            }
            this.$store.commit('addToCar',goodsBuy)
        },
        // 加入购物车小球动画
        beforeEnter (el){
            el.style.transform = "translate(0px,0px)"
        },
        enter (el,done){
            // 获取小球的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取购物车徽标的位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            // 计算相对位置
            var xDist = badgePosition.left - ballPosition.left;
            var yDist = badgePosition.top - ballPosition.top;
            
            el.offsetWidth;
            // 根据相对位置移动小球
            el.style.transform = "translate("+xDist+"px,"+yDist+"px)";
            // cubic-bezier(.4,-0.3,1,.68)是一种动画效果
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        afterEnter (el){
            this.ballFlag = !this.ballFlag
        },
        // 组件传值
        getSelectedCount (count){
            this.selectedCount = count
        }
    },
    // 注册子组件
    components: {
        swiper: swiper,
        numbox:goodsinfo_numbox
    }
};
</script>

<style scoped>
.goodsinfo-container {
    position: relative;
}
.mui-card-content-inner .price {
    color: #000;
}
.mui-card-content-inner .new {
    font-size: 18px;
    color: red;
}
.mui-card-content-inner .count {
    color: #000;
    line-height: 30px;
    margin-bottom: 8px;
}
/* 取消页尾默认的flex布局 */
.mui-card-footer {
    display: block;
}
.mui-card-footer button {
    margin-bottom: 10px;
}
.goodsinfo-container .ball {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: red;
    z-index: 99;
    position: absolute;
    top: 310px;
    left: 150px;
}
</style>


