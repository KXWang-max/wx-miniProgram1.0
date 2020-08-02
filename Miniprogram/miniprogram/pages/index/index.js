//index.js
const app = getApp()

Page({
  data: {
    active: 0,
    icon: {
      classify:'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-classify.svg',
      gift: 'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-gift.svg',
      aclassify:'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-ac-classify.svg',
      agift:'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-ac-gift.svg'
    },
    
    swiperImg:[
      'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic1.jpeg',
      'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic2.jpeg'
    ],
    swiperIdx: 0,
    list:[
      {
        "url": "/pages/index/index",
      },
      {
        "url": "/pages/classify/classify",
      }
    ]
  },
  //底部标签栏
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    wx.switchTab({
      url: this.data.list[event.detail].url
    });
  },
  // 轮播图
  bindchange(e) {
    this.setData({
      swiperIdx: e.detail.current
    })
  },

})