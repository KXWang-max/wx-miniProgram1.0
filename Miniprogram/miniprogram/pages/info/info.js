Page({
  data: {
    active: 0,
    img:'',
    text:'',
    vantab:[
      {
        'title':'1',
        'content':'xxxxx'
      },
      {
        'title':'1',
        'content':'xxxxx'
      }
    ]
  },
  onLoad: function (options) {
    this.setData({
      img:options.img,
      text:options.text
    })
  },
  onChange(event) {
    
  },
  // 标签改变时触发
  tabChange(index,title){

  }
});