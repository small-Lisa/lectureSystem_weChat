// pages/applyResult/applyResult.js
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    num:'2',
  },
  askAgain_noapply: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确定取消申请？取消申请后会影响后续抽奖几率。',
      success: function (res) {
        if (res.confirm) {
          console.log("用户确认");
          wx.redirectTo({
            url: 'pages/index/index',
          })
        } else if (res.cancel) {
          console.log("用户取消");
        }
      }
    })
  },
  signUp:function(e){
    var that=this;
    wx:wx.scanCode({
      onlyFromCamera: true,
      scanType: [],
      success: function(res) {

      },
      fail: function(res) {

      },
      complete: function(res) {

      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lecState: options.lecState
    });
  },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})