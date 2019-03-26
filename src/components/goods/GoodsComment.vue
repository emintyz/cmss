<template>
    <!-- 商品评论页面 -->
    <div>
        <comment :id="id"></comment>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data (){
        return {
            id: this.$route.params.id
        }
    },
    components: {
        comment: comment
    }
}
</script>

<style scoped>

</style>

