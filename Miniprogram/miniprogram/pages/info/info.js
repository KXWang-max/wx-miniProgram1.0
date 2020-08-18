//初始化云端数据库
const db = wx.cloud.database()
//获取数据
const infos = db.collection("infos")

Page({
  data: {
    active: 0,
    img:'',
    text:'',
    no:'',
    func:'',
    people:'',
    usage:''
  },
  onLoad: function (options) {
    let that = this
    this.setData({
      img:options.img,
      text:options.text,
      no:options.no
    })
    infos.get().then(res=>{
      this.setData({
        func:res.data[that.data.no].func,
        people:res.data[that.data.no].people,
        usage:res.data[that.data.no].usage,
      })
    })
  },
  onChange(event) {
    
  },
  // 标签改变时触发
  tabChange(index,title){

  }
});