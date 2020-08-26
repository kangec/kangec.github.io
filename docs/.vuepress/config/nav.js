module.exports = [
  {text: '首页', link: '/'},
  {text: '分类', link: '/categories/'},
  {text: '美食',link: '/food/'},
  {
    text: '专栏',
    link: '/column/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      
        {text: ' Java基础', link: '/pages/66f7b1/'},
        {text: ' Netty', link: '/pages/943ab2/'},
        {text: ' Spring', link: '/pages/958a5b/'},
        {text: ' Mybatis', link: '/pages/a7e17e/'},
        
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
