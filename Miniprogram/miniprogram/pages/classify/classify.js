//初始化云端数据库
const db = wx.cloud.database()
//获取数据
const leftLists = db.collection("leftLists")

Page({
  data: {
    activeKey: 0,
    curNav:0,
    curIndex:0,
    leftList:[],
  },
  //获取数据
  onLoad:function(){
    leftLists.get().then(res=>{
        this.setData({
          leftList:res.data
        })
    })
  },
  //底部标签栏
  onShow: function () {
    this.getTabBar().init();
  },
  //点击左侧标签，切换右侧
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值,数据库中id与index相等
    let index = parseInt(e.target.dataset.index),
    id = index;
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  } 
    
})