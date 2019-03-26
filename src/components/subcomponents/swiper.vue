<template>
    <!-- 轮播图子组件 -->
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../images/l1.jpg" :class="{'full': isfull }">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/l2.jpg" :class="{'full': isfull }">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/l3.jpg" :class="{'full': isfull }">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>


<script>
export default {
    data (){
        return {}
    },
    // 接收父组件传递的图片数据
    props: ['lunbotuList','isfull']
};
</script>


<style scoped>
/* 给轮播图容器设置一个高度，(默认高度为0无法显示) */
.mint-swipe {
    height: 200px;
}
/* 设置轮播图片的大小 */
.mint-swipe-item img {
    /* width: 100%; */
    height: 100%;
}
/* 解决图片宽度问题 */
.full {
    width: 100%;
}
</style>

