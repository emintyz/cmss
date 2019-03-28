<template>
    <!-- 数量选择子组件 -->
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="100">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount || 1"  @change="changeCount" ref="numbox">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
export default {
    methods:{
        // 修改商品数量
        changeCount (){
            // 调用vuex中的方法并传递一个新对象
            this.$store.commit('updateGoodsCount',{
                id: this.goodsid,
                count: this.$refs.numbox.value
            })
        }
    },
    props: ["initcount","goodsid"]
}
</script>


<style>

</style>

