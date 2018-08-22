//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    object: {
      text: 'click'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  click:function(){
    wx.stopPullDownRefresh()
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket:true,
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 下拉刷新监听
  onPullDownRefresh:function(){
    wx.startPullDownRefresh({
      success:function(){
        console.log('success')
      },
      fail:function(){
        console.log('fail')
      },
      complete:function(){
        console.log('complete')
        wx.stopPullDownRefresh()
        
      }
    })
    
  },
  //分享功能
  onShareAppMessage: function (obj){
    console.log(obj)
    return {
      title:"外汇交易",
      path:"/index/index",
      imageUrl:'/image/index1.png'
    }
  },
//
  onTabItemTap:function(obj){
    console.log(obj)
  },
  //组建事件处理函数 改变数据this.setData()
  viewTap: function () {
    this.setData({
      motto:'hollo china',
      'object.text': this.data.object.text == 'click' ? 'clickbACK' :'click'
      },()=>{
        //保留当前页面，跳转到应用内的某个页面
        wx.navigateTo({
          url: "/pages/text/text",
          success:()=>{
            console.log('跳转成功')
          }
        })
      console.log('数据更新完成')
    })
  },
  getCurrentPages(){
  }
})
