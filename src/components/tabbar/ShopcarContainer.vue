<template>
    <!-- 购物车页面 -->
    <div class="shopcar-container">
        <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" 
                    @change="changeSelected(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                    <img src="../../images/m2.jpg" alt="">
                    <div class="info">
                        <h1>{{ item.title }}</h1>
                        <p>
                            <span class="price">￥{{ item.price }}</span>
                            <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                            <a href="#" @click.prevent="removeGoods(item.id,i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="total">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">{{ $store.getters.getGoodsAmount['count'] }}</span>件，总价￥
                        <span class="red">{{ $store.getters.getGoodsAmount['amount'] }}</span></p>
                    </div>
                    <div class="goToBuy">
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data (){
        return {
            goodslist: [
                {id: 2,title:'华为P30 Pro',price: 2199, count: 3},
                {id: 3,title:'小米9',price: 2999, count: 1},
                {id: 4,title:'华为P30 Pro',price: 1299, count: 5},
                {id: 5,title:'华为P30 Pro',price: 3399, count: 2}
            ]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods: {
        // 获取购物车数据
        getGoodsList (){
            // 获取store中car的所有id，放到一个数组中
            var idAll = [];
            this.$store.state.car.forEach(item => {
                idAll.push(item.id)
            });
            // 如果为空则返回
            if(idAll.legth == 0){
                return
            }
            // 请求数据
            // this.$http.get('' + idAll.join(',')).then(result => {
            //     if(result.body.status === 0){
            //         this.goodslist = result.body.message
            //     }
            // })
        },
        removeGoods (id,i){
            // 删除数组中的商品
            this.goodslist.splice(i,1)
            // 删除vuex中的商品并刷新本地存储
            this.$store.commit('removeFromCar',id)
        },
        // 选中状态
        changeSelected (id,val){
            this.$store.commit('updateGoodsSelected',{id:id,selected: val})
        }
    },
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
    justify-content: space-between;
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

.red {
    color: red;
    font-size: 16px;
}
</style>


