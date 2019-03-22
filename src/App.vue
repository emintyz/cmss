<template>
    <div class="app-container">
        
        <!-- 顶部Header区域 -->
        <mt-header fixed title="这个杀手不太冷"></mt-header>
        <h1>主题内容</h1>
        
        
        
        <!-- 中间的路由区域 -->
        
        
        
        
        <!-- 底部Tabbarr区域 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
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
    }
</style>

