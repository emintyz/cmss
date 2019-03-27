<template>
    <div class="app-container">
        
        <!-- 顶部Header区域 -->
        <mt-header fixed title="这个杀手不太冷"></mt-header>
        
        
        
        
        <!-- 中间的路由区域 -->
		<transition>
        	<router-view></router-view>
		</transition>
        
        
        
        <!-- 底部Tabbarr区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-reset" href="#tabbar" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-reset" href="#tabbar-with-chat" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-reset" href="#tabbar-with-contact" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-reset" href="#tabbar-with-map" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    /* 固定头部组件默认脱离文档流，后面的元素会挤上来，通过给外部div设置padding来解决 */
    .app-container {
        padding-top: 40px;
		padding-bottom: 50px;
		/* 解决组件切换时横向滚动条问题 */
		overflow-x: hidden;
    }
	/* 组件切换动画效果 */
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}
	.mint-header.is-fixed {
    	top: 0;
    	right: 0;
    	left: 0;
    	position: fixed;
   	 	z-index: 8;
	}
	/* 更改类名，解决滑动条问题 */
	.mui-bar-tab .mui-tab-item-reset .mui-active {
    	color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-reset{
		display: table-cell;
   	 	overflow: hidden;
   		width: 1%;
    	height: 50px;
    	text-align: center;
    	vertical-align: middle;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	color: #929292;
	}
	.mui-bar-tab .mui-tab-item-reset .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-reset .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-reset .mui-active[data-v-7ba5bd90] {
    color: #007aff;
}
</style>

