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
8、获取所有评论数据，显示在页面中
9、实现点击加载更多评论，拼接新数组

# 第三天
## 实现发表评论的功能
1、给文本框做双向数据绑定
2、评论内容为空，Toast提示
3、为按钮绑定事件，将评论内容提交给服务器，重新刷新列表
4、调用getComments方法刷新评论列表会导致只能得到最后一页的内容，前面的会被覆盖掉，因此采用手动在页面创建一个评论对象，追加到评论数组中
## 图片分享功能
5、将图片分享改造为路由链接，绘制图片分享页面
6、顶部滑动条制作，使用MUI中的tab-top-webview-main组件，需要把mui-fullscreen类去掉
7、实现滑动效果还需要引入js文件并调用函数初始化，禁用webpack打包时的严格模式，五个坑
8、获取图片全部分类，渲染到滑动条，通过v-bind给a链接设置类样式，默认高亮
9、制作图片列表区域
    9.1、实现图片懒加载，使用mint-ui中的lazy-load组件
    9.2、制作图片描述区域
10、改造li为router-link，(渲染为li，保证样式不变)
11、制作图片详情页面，根据id请求数据并渲染到页面中
13、图片缩略图,使用vue-preview插件，获取到所有的缩略图列表，渲染到页面中
12、根据id导入评论子组件,导入并注册

# 第四天
## 商品列表
1、改造商品列表为路由链接，绘制商品列表页面,伸缩布局实现两列布局
2、获取商品列表中的数据并渲染到页面中，实现加载更多功能
3、使用编程式导航实现跳转，
4、绘制商品详情页面，使用MUI中的'card'插件
5、抽离轮播图模块,解决图片宽度问题--通过给轮播图传递一个布尔值控制是否应用宽度100%的样式
6、绘制商品购买界面,数量选择使用MUI的'numbox'组件，需要初始化
7、获取商品详情，渲染到页面中
8、编程式导航实现图文介绍和商品评论的跳转
9、获取图文介绍数据，渲染到页面中，商品评论采用评论子组件
