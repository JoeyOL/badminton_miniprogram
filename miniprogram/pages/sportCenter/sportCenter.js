

// pages/sportCenter/sportCenter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['充值优惠', '比赛报名','培训服务'],
    contests:[{
      name:'2023哈尔滨工业大学新生杯',
      time:'9.28-10.1',
      place:'大学城体育馆',
      total:'50',
      left:'45',
      form:"单打",
      demand:"2023届大一or研一新生,2023届大一or研一新生2023届大一or研一新生2023届大一or研一新生2023届大一or研一新生",
      url:'/images/Figure_1.png'
    }],
    currentTab: 0,
  },
  //切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    //全局变量
    app.globalData.currentTab = e.currentTarget.dataset.idx;
  },
  onShow() {
    this.setData({
      currentTab: app.globalData.currentTab
    })
  },

  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current,
    })
    //全局变量
    app.globalData.currentTab = e.detail.current;
  },
   
  checkImg:function(e){
    console.log(e)
    var photo=e.currentTarget.dataset.url
    console.log(photo)

    wx.previewImage({
      current:photo,
      urls: [photo],                  
      success: function (res) { console.log(2)},
      fail: function (res) { console.log(1)},
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})