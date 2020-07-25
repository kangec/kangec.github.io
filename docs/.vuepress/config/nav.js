module.exports = [
  {text: '首页', link: '/'},
  {text: '分类', link: '/categories/'},
  {text: '分享美食',link: '/food/'},
  {
    text: '专栏',
    link: '/column/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      
        {text: ' Java基础', link: '/note/java/'},
        {text: ' Netty', link: '/note/netty/'},
        {text: ' Spring', link: '/note/spring/'},
        {text: ' Spring Boot', link: '/note/springboot/'},
      
    ]
  },
  {
    text: '更多',
    link: '/more/',items:[
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  },

]