Page({
  data: {
    giftList:[
      {
        url:'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic1.jpeg',
        text:'xxxxxx'
      },
      {
        url:'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic1.jpeg',
        text:'lalala'
      },
      {
        url:'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic1.jpeg',
        text:'hhhhhh'
      },
      {
        url:'cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/swiper/pic1.jpeg',
        text:'emmmm'
      }
    ]
  },
  onShow: function () {
    console.log('加载底部栏gift')
    this.getTabBar().init();
  },
})