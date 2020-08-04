Page({
  data: {
    activeKey: 0,
    curNav:0,
    curIndex:0,
    leftList:[
      {
        "id":0,
        "text":"种类0",
        isHaveChild:true,
        rightContent:[
          {
            "url":"/pages/info/info?img=cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/classify/classify1-1.jpeg&text=hhh",
            "img":"cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/classify/classify1-1.jpeg",
            "text":"hhh"
          },
          {
            "img":"cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/classify/classify1-1.jpeg",
            "text":"xxx"
          },
          {
            "img":"cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/classify/classify1-1.jpeg",
            "text":"lala"
          }
        ]
      },
      {
        "id":1,
        "text":"种类1",
        isHaveChild:false,
        leftList:[]
      },
      {
        "id":2,
        "text":"种类2",
        isHaveChild:false,
        leftList:[]
      },
      {
        "id":3,
        "text":"种类3",
        isHaveChild:false,
        leftList:[]
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
  } 
    
})