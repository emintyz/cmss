<template>
    <!-- 通用评论子组件 -->
    <div  class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请发表的你的观点" cols="30" rows="5" v-model="mycomment"></textarea>
        <mt-button type="primary" size="large" @click="postComments">发表</mt-button>
        
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time.toString()">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item. user_name}}&nbsp;&nbsp;
                    发表时间：{{ item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    <!-- 三元表达式判断没有内容，则显示其他的 -->
                    {{ item.content === 'undefined'? '此用户没有任何评价' :  item.content}}
                </div>
            </div>
        </div>
        
        <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>        
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data (){
        return {
            pageIndex: 1,   //默认展示第一页数据
            comments: [       //所有的评论数据
                {user_name: '王大锤', add_time: '2012-05-06 12:06:34', content: '你这牌打的也太好了'},
                {user_name: '王大锤', add_time: '2012-05-12 12:06:34', content: '快点吧我等的花都谢了'},
                {user_name: '王大锤', add_time: '2012-05-23 12:06:34', content: '6666'},
                {user_name: '王大锤', add_time: '2012-05-14 12:06:34', content: '6666'},
                {user_name: '王大锤', add_time: '2012-05-09 12:06:34', content: '6666'},
                {user_name: '王大锤', add_time: '2012-05-19 12:06:34', content: '6666'},
                {user_name: '王大锤', add_time: '2012-05-24 12:06:34', content: '6666'},
            ],
            mycomment: ''   
        }
    },
    created (){
        this.getComments()
    },
    methods: {
        // 获取评论
        getComments (){
            // this.$http.get('api/getcomments/' + this.id + '?pageIndex=' + this.pageIndex,)
            // .then(result => {
            //     if(result.body.status === 0){
            //         this.comments = result.body.message
            //     } else {
            //         Toast('获取评论失败')
            //     }
            // })
        },
        // 加载更多评论
        getMoreComments (){
            // // 让pageIndex加1
            // this.pageIndex += 1
            // this.$http.get('api/getcomments/' + this.id + '?pageIndex=' + this.pageIndex,)
            // .then(result => {
            //     if(result.body.status === 0){
            //         // 加载更多数据，拼接到原先的数组中
            //         this.comments = this.comments.concat(result.body.message)
            //     } else {
            //         Toast('获取评论失败')
            //     }
            // })
        },
        // 发表评论
        postComments (){
            if (this.mycomment == ''){
               Toast('输入内容为空')
            } else {
                // this.$http.post('api/postcomment/' + $router.params.id, {content: this.mycomment.trim()})
                this.comments.unshift({user_name: '李白', add_time: new Date(), content: this.mycomment})
                this.mycomment = ''
            }
        }
    },
    // 接收父组件传递过来的id
    props: ["id"]
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
        font-size: 13px;
    }
    .cmt-list .cmt-body {
        padding: 5px 10px;
        font-size: 14px;
    }
</style>


