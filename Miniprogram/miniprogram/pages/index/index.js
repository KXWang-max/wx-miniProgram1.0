//初始化云端数据库
const db = wx.cloud.database()
//轮播图数据
const swiperImgs = db.collection("swiperImgs")
//精选区数据
const choices = db.collection("choices")


//index.js
const app = getApp()
Page({
  data: {
    active: 0,
    swiperImg:[],
    swiperIdx: 0,
    choice:[]
  },
  onLoad:function(){
      //轮播图数据
      swiperImgs.get().then(res=>{
        this.setData({
          swiperImg : res.data
        })
      })
      //精选区数据
      choices.get().then(res=>{
        this.setData({
          choice:res.data
        })
      })
  },
  //底部标签栏
  onShow: function () {
    this.getTabBar().init();
  },
  //搜索栏搜索
  onSearch:function(e) {
    console.log(e.detail)
  },
  //取消搜索
  onCancel:function() {
  },
  // 轮播图
  bindchange(e) {
    this.setData({
      swiperIdx: e.detail.current
    })
  },

})