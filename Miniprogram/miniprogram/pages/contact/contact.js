//初始化云端数据库
const db = wx.cloud.database()
//获取数据
const contact = db.collection("contact")

Page({
  data: {
    img:""
  },
  onLoad:function(){
    contact.get().then(res=>{
      this.setData({
        img:res.data[0].img
      })
    })
  },
  onShow: function () {
    this.getTabBar().init();
  },
})