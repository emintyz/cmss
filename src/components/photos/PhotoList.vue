<template>
    <!-- 图片分享页面 -->
    <div class="photolist-container">
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
                    <!-- 通过v-bind给a链接设置类样式，默认高亮 -->
					<a :class="['mui-control-item', item.id == 0? 'mui-active' : '']"  data-wid="tab-top-subpage-1.html"
                    v-for="item in cates" :key="item.id"  @click="getPhotoList(item.id)">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>
        <!-- 图片列表 -->
        <ul class="photo-list">
            <router-link :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item.id" tag="li">
                <img src="../../images/p1.jpg">
                <!-- 图片描述 -->
                <div class="photo-list-info">
                    <h3 class="info-title">{{ item.title }}</h3>
                    <div class="info-body">{{ item.content }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// 导入mui的js文件
import mui from '../../lib/mui/js/mui.js'

export default {
    data (){
        return {
            cates: [
                {title: '全部',id: 0},
                {title: '家居生活',id: 1},
                {title: '摄影设计',id: 2},
                {title: '动物世界',id: 3},
                {title: '明星八卦',id: 4},
                {title: '世界风景',id: 5},
                {title: '汽车达人',id: 6},
                {title: '运动热潮',id: 7}
            ],
            list: [
                { id: 1,title: '第一张',img_url: "../../images/menu1.png", content: '改革春风吹满地，中国人民真争气，这个世界太疯狂，耗子给猫当伴娘'},
                { id: 2,title: '第二张',img_url: "../../images/menu1.png", content: '改革春风吹满地，中国人民真争气，这个世界太疯狂，耗子给猫当伴娘' },
                { id: 3,title: '第三张',img_url: "../../images/menu1.png", content: '改革春风吹满地，中国人民真争气，这个世界太疯狂，耗子给猫当伴娘' },
                { id: 4,title: '第四张',img_url: "../../images/menu1.png", content: '改革春风吹满地，中国人民真争气，这个世界太疯狂，耗子给猫当伴娘' }
            ]
        }
    },
    // 操作元素最好在mounted里面
    mounted (){
        // 初始化滑动组件
        mui('.mui-scroll-wrapper').scroll({
        	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    created (){
        this.getAllCategory()
        this.getPhotoList(0)
    },
    methods: {
        // 获取所有的图片分类
        getAllCategory (){
            // this.$http.get('').then(result => {
            //     if(result.body.status === 0) {
            //         this.cates = result.body.message.unshift({title: '全部',id: 0})
            //     }
            // })
        },
        // 根据id获取图片列表
        getPhotoList (cateid){
            // this.$http.get('api/getimages/' + cateid).then(result => {
            //     if(result.body.status === 0) {
            //         this.list = result.body.message
            //     }
            // })
        }
    }
}
</script>

<style scoped>
    * {
        /* 解决滑动时的警告 */
        touch-action: pan-y;
    }
    .photolist-container {
        background-color: #fff;
    }
    .photo-list {
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
    }
    .photo-list li {
        background-color: #eee;
        list-style: none;
        text-align: center;
        margin-bottom: 5px;
        position: relative;
    }
    .photo-list li img {
        width: 100%;
        vertical-align: middle;
    }
    .photo-list li img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .photo-list-info {
        color: #fff;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,.4);
        padding: 5px;
    }
    .photo-list-info .info-title {
        font-size: 16px;
    }
    .photo-list-info .info-body {
        font-size: 14px;
    }
</style>

