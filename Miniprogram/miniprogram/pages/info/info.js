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
    //这里在数据库上应该有更好的设计方法，但信息多时间少..so..用了find
    infos.get().then(res=>{
      let infoArray = res.data
      console.log(infoArray)
      let noFinalArray = infoArray.find(item=>{
        return item.no==that.data.no
      })
      this.setData({
        func:noFinalArray.func,
        people:noFinalArray.people,
        usage:noFinalArray.usage,
      })
    })
  },
  onChange(event) {
    
  },
  // 标签改变时触发
  tabChange(index,title){

  }
});