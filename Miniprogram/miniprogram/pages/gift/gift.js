const db = wx.cloud.database()
const gifts = db.collection('gifts')

Page({
  data: {
    giftList:[]
  },
  onLoad:function(){
    gifts.get().then(res=>{
      this.setData({
        giftList:res.data
      })
    })
  },
  onShow: function () {
    this.getTabBar().init();
  },
})