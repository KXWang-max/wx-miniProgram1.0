// index.js文件
Component({
  data: {
    active: 0,
    list: [
      {
        "url": "/pages/index/index",
        "icon": "cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/home.svg",
        "aicon":"cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/ac-home.svg",
        "text": "首页"
      },
      {
        "url": "/pages/classify/classify",
        "icon": "cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-classify.svg",
        "aicon": "cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-ac-classify.svg",
        "text": "分类"
      },
      {
        "url": "/pages/gift/gift",
        "icon": "cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-gift.svg",
        "aicon": "cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/tab-ac-gift.svg",
        "text": "礼盒"
      },
      {
        "url": "/pages/contact/contact",
        "icon": "cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/contact.svg",
        "aicon": "cloud://richwoman-env-iw8pg.7269-richwoman-env-iw8pg-1302762108/tabbar/ac-contact.svg",
        "text": "联系我们"
      }
    ]
    },
    methods: {
     onChange(e) {
        console.log(e,'e')
        this.setData({ active: e.detail });
        wx.switchTab({
          url: this.data.list[e.detail].url
        });
     },
     init() {
         const page = getCurrentPages().pop();
         this.setData({
        　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
         });
        }
     }
});