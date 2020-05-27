// pages/home/home.js

const app = getApp();
console.log(app.globalData.name)
console.log(app.globalData.age)

//注册页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: 'chen',
    movies: {
      1: 'CHEN',
      2: 'ZU',
      3: 'RONG',
    },
    counter: 0,
  },

  /* 监听wxml页面的事件 */
  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },

  delBtnClick() {
    // this.data.counter--
    // console.log(1111)
    this.setData({
      counter: this.data.counter - 1
    })
  },

  handelGetUserInfo(res) {
    console.log(res)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.request({
      url: 'http//123.207.32.32:8080/recommend',
      complete: (res) => {},
      data: data,
      dataType: 'json',
      fail: (res) => {},
      // header: header,
      method: 'get',
      responseType: responseType,
      success: (result) => {
        console.log(result)
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onhide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onunload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onpulldownrefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onreachbottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onshareappmessage")
  },
})