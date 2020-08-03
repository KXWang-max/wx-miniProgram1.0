Page({
  data: {
    activeKey: 0,
    curNav:0,
    leftList:[
      {
        "id":0,
        "text":"种类0",
        "isHaveChild":true,
        "rightContent":[
          {
            "text":"123"
          }
        ]
      },
      {
        "id":1,
        "text":"种类1"
      },
      {
        "id":2,
        "text":"种类2"
      },
      {
        "id":3,
        "text":"种类3"
      }
    ],
  },
  //底部标签栏
  onShow: function () {
    console.log('加载底部栏')
    this.getTabBar().init();
  },
  //点击左侧标签，切换右侧
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
    console.log(this.data.leftList[curNav].ishaveChild)
  } 
    
})