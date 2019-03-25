<template>
    <!-- 新闻资讯详情页 -->
    <div class="newsinfo-container">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击： {{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
// 导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
    data (){
        return {
            id: this.$route.params.id,  //将URL地址中传递过来的id值挂载到data中，方便调用
            newsinfo: {        //新闻对象
                'title': '电子与电气工程学院',
                'add_time': new Date(),
                'click': 86,
                'content': '这是主要内容这是主要内容这是主要内容这是主要内容这是主要内容 这是主要内容这是主要内容这是主要内容这是主要内容这是主要内容'
            }
        }
    },
    created (){
        this.getNewsInfo(this.id)
    },
    methods: {
        getNewsInfo (id){
            // this.$http.get('').then(result => {
            //     if(result.body.status === 0){
            //         this.newsinfo = result.body.message[0]
            //     } else {
            //         Toast('获取失败')
            //     }
            // })
        }
    },
    // 注册评论子组件
    components: {
        'comment-box': comment
    }
}
</script>

<style scoped>
    .newsinfo-container h3 {
        margin: 0;
        padding: 0;
        text-align: center;
        padding: 10px 0;
        color: red;
    }
    .newsinfo-container .subtitle {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        color: deepskyblue;
    }
    .content img {
        /* 解决详情页中图片内容过大的问题，还需要将scoped去掉 */
        width: 100%;
    }
</style>


