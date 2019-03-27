<template>
    <!-- 购物车页面 -->
    <div class="shopcar-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch></mt-switch>
                    <img src="../../images/m2.jpg" alt="">
                    <div class="info">
                        <h1>华为P30 Pro华为P30 Pro华为P30 Pro华为P30 Pro</h1>
                        <p>
                            <span class="price">￥2199</span>
                            <numbox class="number"></numbox>
                            <a href="#">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    components: {
        numbox: numbox
    }
};
</script>


<style scoped>
h1 {
    margin: 0;
    padding: 0;
}
.mui-card .mui-card-content .mui-card-content-inner {
    display: flex;
    align-items: center;
    padding: 15px;
}
.mui-card .mui-card-content img {
    width: 50px;
    height: 50px;
}
.mui-card .mui-card-content .info h1 {
    font-size: 13px;
    margin-bottom: 8px;
}
.mui-card .mui-card-content .info p{
    margin-top: 5px;
    margin: 0;
    padding: 0;
}
.mui-card .mui-card-content .info p .price{
    color: red;
    font-size: 16px;
}
</style>


