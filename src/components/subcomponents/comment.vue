<template>
    <!-- 通用评论子组件 -->
    <div  class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请发表的你的观点" cols="30" rows="5"></textarea>
        <mt-button type="primary" size="large">发表</mt-button>
        
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第一楼</div>
                <div class="cmt-body">太好看了</div>
            </div>
        </div>
        
        <mt-button type="danger" size="large" plain>发表</mt-button>        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .cmt-container {
        padding: 0 5px;
    }
    .cmt-container h3{
        font-size: 20px;
    }
    .cmt-container textarea{
        font-size: 14px;
        margin: 0;
    }
    .cmt-list .cmt-title {
        background-color: #ccc;
        padding: 5px 5px;
    }
    .cmt-list .cmt-body {
        padding: 5px 5px;
    }
</style>


