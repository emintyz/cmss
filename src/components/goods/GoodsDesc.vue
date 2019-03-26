<template>
    <!-- 商品图文详情页面 -->
    <div class="goodsdesc-container">
        <h3>{{ goodsdesc.title }}</h3>
        <hr>
        <div class="content">{{ goodsdesc.content }}</div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            goodsdesc: {
                title: '浙江温州江南皮革厂倒闭了',
                content: '先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也'
            }
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.goodsdesc-container  {
    padding: 0 8px;
}
.goodsdesc-container  h3{
    text-align: center;
    padding-top: 10px;
    margin: 0;
}
.goodsdesc-container .content {
    line-height: 40px;
}
</style>

