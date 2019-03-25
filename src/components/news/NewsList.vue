<template>
    <!-- 新闻资讯列表 -->
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key='item.id'>
                    <!-- router-link拼接字符串时需要使用v-bind绑定属性 -->
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" src="https://avatars2.githubusercontent.com/u/47808621?s=40&v=4">
						<div class="mui-media-body">
							<h4>{{ item.title }}</h4>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dateFormat }}</span>
                                <span>点击： {{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data (){
        return {
            newsList: [
                { id: 1, title: '自动控制原理', add_time: new Date(), click: 5 },
                { id: 2, title: '微机原理', add_time: new Date(), click: 26 },
                { id: 3, title: '单片机', add_time: new Date(), click: 595 },
                { id: 4, title: '线性代数', add_time: new Date(), click: 13 }
            ]
        }
    },
    created (){
        this.getNewsList()
    },
    methods: {
        getNewsList (){
            // this.$http.get('').then(result => {
            //     if(result.body.status === 0){
            //         this.newsList = result.body.message
            //     } else {
            //         Toast('获取失败')
            //     }
            // })
        }
    }
}
</script>

<style scoped>
    .mui-table-view h4 {
        font-size: 14px;
    }
    .mui-table-view .mui-table-view-cell .mui-ellipsis {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: deepskyblue;
    }
</style>


