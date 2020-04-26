var app = getApp()

Page({
  data: {
    swiperImg: [
      { src: "/images/pic1.jpg" },
      { src: "/images/pic2.jpg" },
      { src: "/images/pic3.jpg" }
    ],
    lecList: [
      {
        lecName: "职业生涯",
        lecTime: "2019.11.01 15:20:00",
        lecState: "一轮申请"
      },
      {
        lecName: "心理健康",
        lecTime: "2019.11.02 15:20:00",
        lecState: "二轮申请"
      },
      {
        lecName: "技能学习",
        lecTime: "2019.11.03 15:20:00",
        lecState: "不可申请"
      },
      {
        lecName: "数学文化",
        lecTime: "2019.11.03 15:20:00",
        lecState: "已过期"
      },
    ],
  },
  askAgain_apply:function(e){
    //可申请
    // if(e.lecState=="一轮申请" || e.lecState=="二轮申请"){
    wx.showModal({
      title: '提示',
      content: '是否确定申请？',
      success:function(res){
        if(res.confirm){
          // console.log("用户确认");
          console.log(e.lecName);
          wx.navigateTo({
            url: '/pages/applyResult/applyResult',
          })
        }else if(res.cancel){
          // console.log("用户取消");
        }
      }
    })
    // }
    // //不可申请
    // else if (e.lecState == "未开始" || e.lecState == "已过期"){
    // wx.showToast({
    //   title: '不可申请',
    // })
    // }
  },


})