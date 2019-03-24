# 这是一个vue+webpack的项目
## 这个项目用到了Mint-UI和MUI


# 第一天
## 制作首页App组件
1、完成Header区域，使用的是Mint-UI中的Header组件
2、制作底部的Tabbar区域使用的是MUI中的Tabbar组件
3、在中间区域放置一个router-view来展示路由匹配到的组件
4、改造tabbar为router-link，设置路由高亮
5、点击tabbar中的路由链接，展示对应的路由组件
6、制作首页轮播图数据
7、加载首页轮播图数据，
    7.1使用vue-resource发起请求获取图片(this.$http.get)
    7.2使用v-for循环渲染每个item项
8、改造九宫格区域的样式：取消默认样式，更换图片
9、组件切换动画效果

# 第二天
## 制作新闻资讯页面
1、将新闻资讯改造为路由链接
2、绘制新闻资讯页面，使用MUI中的media-list组件
3、获取新闻数据,渲染到页面中
4、定义全局过滤器格式化时间
5、把新闻资讯列表改为路由链接，跳转的时候提供一个id标识符
6、实现新闻资讯详情页的布局和数据渲染
## 制作通用评论子组件
7、创建一个评论子组件，实现评论子组件布局