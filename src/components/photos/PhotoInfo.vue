<template>
    <!-- 图片详情页面 -->
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间： {{ photoinfo.add_time | dateFormat }}</span>
            <span>点击： {{ photoinfo.click }}次</span>
        </p>
        <hr>
        <!-- 图片缩略图 -->
        <div class="thumbs">
            <!-- 模拟 -->
            <img src="../../images/pi1.jpg" alt="">
            <img src="../../images/pi2.jpg" alt="">
            <img src="../../images/pi3.jpg" alt="">
            <img src="../../images/pi4.jpg" alt="">
            <img src="../../images/pi5.jpg" alt="">
            <img class = "preview-img" v-for="(item,index) in list" :src="item.src"
            height="100" @click="$preview.open(index,list)" :key="item.src" >
        </div>
        
        <!-- 内容 -->
        <div class="content">{{ photoinfo.content }}</div>
        <!-- 评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>


<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data (){
        return {
            id: this.$route.params.id,
            photoinfo: {
                title: '电子与电气工程学院',
                add_time: new Date(),
                click: 86,
                content: '这是主要内容这是主要内容这是主要内容这是主要内容这是主要内容 这是主要内容这是主要内容这是主要内容这是主要内容这是主要内容'
            },
            list: []
            
        }
    },
    created (){
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods: {
        // 获取图片详情
        getPhotoInfo (){
            // this.$http.get('').then(result => {
            //     if(result.body.status === 0){
            //         this.photoinfo = result.body.message
            //     } else {
            //         Toast('获取图片详情失败')
            //     }
            // })
        },
        // 获取缩略图
        getThumbs (){
            // this.$http.get('api/getthumbimages/'+this.id).then(result => {
            //     if(result.body.status === 0){
            //         result.body.message.forEach(item => {
            //             item.w = 600;
            //             item.h = 400;
            //         })
            //         this.list = result.body.message
            //     } else {
            //         Toast('获取缩略图失败')
            //     }
            // })
        }
    },
    // 注册到组件中
    components: {
        'comment-box': comment
    }
}
</script>


<style scoped>
    .photoinfo-container {
        padding: 5px;
    }
    .photoinfo-container h3 {
        color: deepskyblue;
        text-align: center;
        padding-bottom: 5px;
        font-size: 18px;
    }
    .photoinfo-container .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .photoinfo-container .content {
        font-size: 14px;
    }
    .thumbs {
        display: flex;
        flex-flow: wrap;
    }
    .thumbs img {
        width: 100px;
        height: 100px;
        margin: 5px 10px;
    }
</style>
