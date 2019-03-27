<template>
    <!-- 商品列表 -->
    <div class="goodslist-container">
        <!-- 编程式导航   goDetail(item.id) -->
        <router-link to="/home/goodsinfo/1" class="goodslist-item" >   
            <img src="../../images/m1.jpg" alt="">
            <h3 class="title">华为麦芒五</h3>
            <div class="info">
                <p class="price">
                    <span class="new">¥25.00</span>
                    <span class="old">¥59.00</span>
                </p>
                <p class="cell">
                    <span>热卖中</span>
                    <span>剩余25件</span>
                </p>
            </div>
        </router-link>
         <router-link to="/home/goodsinfo/2" class="goodslist-item" >  
            <img src="../../images/m2.jpg" alt="">
            <h3 class="title">华为麦芒五</h3>
            <div class="info">
                <p class="price">
                    <span class="new">¥25.00</span>
                    <span class="old">¥59.00</span>
                </p>
                <p class="cell">
                    <span>热卖中</span>
                    <span>剩余25件</span>
                </p>
            </div>
        </router-link>
         <router-link to="/home/goodsinfo/3" class="goodslist-item" >   
            <img src="../../images/m3.jpg" alt="">
            <h3 class="title">华为麦芒五</h3>
            <div class="info">
                <p class="price">
                    <span class="new">¥25.00</span>
                    <span class="old">¥59.00</span>
                </p>
                <p class="cell">
                    <span>热卖中</span>
                    <span>剩余25件</span>
                </p>
            </div>
        </router-link>
         <router-link to="/home/goodsinfo/4" class="goodslist-item" >   
            <img src="../../images/m4.jpg" alt="">
            <h3 class="title">华为麦芒五</h3>
            <div class="info">
                <p class="price">
                    <span class="new">¥25.00</span>
                    <span class="old">¥59.00</span>
                </p>
                <p class="cell">
                    <span>热卖中</span>
                    <span>剩余25件</span>
                </p>
            </div>
        </router-link>
         <router-link to="/home/goodsinfo/5" class="goodslist-item" >   
            <img src="../../images/m5.jpg" alt="">
            <h3 class="title">华为麦芒五华为麦芒五华为麦芒五华为麦芒五华为麦芒五</h3>
            <div class="info">
                <p class="price">
                    <span class="new">¥25.00</span>
                    <span class="old">¥59.00</span>
                </p>
                <p class="cell">
                    <span>热卖中</span>
                    <span>剩余25件</span>
                </p>
            </div>
        </router-link>
         <router-link to="/home/goodsinfo/6" class="goodslist-item" >   
            <img src="../../images/m6.jpg" alt="">
            <h3 class="title">华为麦芒五</h3>
            <div class="info">
                <p class="price">
                    <span class="new">¥25.00</span>
                    <span class="old">¥59.00</span>
                </p>
                <p class="cell">
                    <span>热卖中</span>
                    <span>剩余25件</span>
                </p>
            </div>
        </router-link>
         <router-link to="/home/goodsinfo/7" class="goodslist-item" >   
            <img src="../../images/m7.jpg" alt="">
            <h3 class="title">华为麦芒五</h3>
            <div class="info">
                <p class="price">
                    <span class="new">¥25.00</span>
                    <span class="old">¥59.00</span>
                </p>
                <p class="cell">
                    <span>热卖中</span>
                    <span>剩余25件</span>
                </p>
            </div>
        </router-link>
        
        <!-- 加载更多按钮 -->
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>


<script>
export default {
    // 省略获取数据的过程。。。
    data (){
        return {
            item: {id: 2}
        }
    },
    methods: {
        // 使用vue-router实例编程式导航
        goDetail (id){
            // this.$route和this.$router的区别：
            // this.$route时路由参数对象，所有路由中的参数，params、query都属于它
            // this.$router是一个路由导航对象，用它可以方便的使用js代码，实现路由的前进、后退、跳转到URL地址
            
            // 1、传递字符串
            // this.$router.push('/home/goodsinfo/' + id)
            // 2、传递对象
            // this.$router.push( { path: '/home/goodsinfo/' + id } )
            // 3、传递命名的路由--需要给路由添加name属性
            // this.$router.push( { name: 'goodsinfo',params: {id} } )
            // 4、带查询参数
            // this.$router.push( { path: 'goodsinfo',query: {id} } )
        }
    }
}
</script>

<style scoped>
    .goodslist-container {
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        /* 给父盒子设置padding,然后让子元素两边对齐，实现多出来的也居左对齐 */
        padding: 8px;
        justify-content: space-between;
    }
    .goodslist-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin-bottom: 7px;
        padding: 2px;
        /* 给每个图片设置伸缩布局，改变主轴并设置主轴对齐方式，解决文字过长导致底部空白的问题 */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* 图片加载不出来时展示盒子最小高度 */
        /* min-height: 300px; */
    }
    .goodslist-item img {
        width: 100%;
    }
    .goodslist-item .title {
        font-size: 16px;
        font-weight: bold;
        padding: 8px 5px 0 2px;
    }
    .goodslist-item .info {
        background-color: #eee;
        padding: 5px;
    }
    .goodslist-item .info .price {
        margin-bottom: 3px;
    }
    .goodslist-item .info .price .new {
        color: red;
        font-size: 18px;
        font-weight: bold;
        padding-left: 5px;
        padding-right: 15px;
    }
    .goodslist-item .info .price .old {
        text-decoration: line-through;
    }
    .goodslist-item .info .cell {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;
    }
</style>

