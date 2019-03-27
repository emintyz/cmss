<template>
    <!-- 数量选择子组件 -->
    <div>
        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="postCount" ref="count">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
// 导入mui
import mui from  '../../lib/mui/css/mui.min.css'

export default {
    data (){
        return {}
    },
    mounted (){
        // 初始化数字选择框
        // mui(".mui-numbox").numbox()
        // console.log(max)
    },
    methods: {
        postCount (){
            // 数量改变就调用方法向父组件传值
            this.$emit('getCount', parseInt(this.$refs.count.value))
        }
    },
    // 接收父组件传递的库存数量
    props: ["max"],
    // 使用watch监听max的变化
    watch: {
        // max: function (newVal,oldVal){
        //     mui(".mui-numbox").numbox().setOption("max",newVal)
        // }
    }
}
</script>


<style>

</style>

