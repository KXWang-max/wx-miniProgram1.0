//index.js
const app = getApp()

Page({
  data: {
    active: 0,
    swiperImg:[
      'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic1.jpeg',
      'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic2.jpeg'
    ],
    swiperIdx: 0,
    
  },
  //底部标签栏
  onShow: function () {
    console.log('加载底部栏')
    this.getTabBar().init();
  },
  // 轮播图
  bindchange(e) {
    this.setData({
      swiperIdx: e.detail.current
    })
  },

})