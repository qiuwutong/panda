// pages/user/user.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "avatarUrl": '',//用户头像
        "nickName": ""//用户名字
    },
    // 我的订单
    "orderTap": function () {
        wx: wx.navigateTo({
            url: '/pages/order/order'
        })
    },
    // 地址管理
    "addressTap": function () {
        wx.chooseAddress({
            'success': function (res) {
                var address = [{ "name": res.userName, "add": res.provinceName + res.cityName + res.countyName + res.detailInfo, "phone": res.telNumber }]
                // 要把默认收货地址传给服务器保存
                wx.showToast({
                    title: '默认收货地址传给服务器保存',
                })
            },
            "fail": function () {
                wx.getSetting({
                    "success": function (e) {
                        if (!e.authSetting["scope.address"]) {
                            wx.openSetting({

                            })
                        }
                    }
                })
            }
        })
    },
    // 我的收藏
    "shoucangTap": function () {
        wx.navigateTo({
            url: '/pages/user/shoucang/shoucang',
        })
    },
    // 
    "questionTap": function () {
        wx.navigateTo({
            url: '/pages/user/question/question',
        })
    },
    // 
    "aboutTap": function () {
        wx.navigateTo({
            url: '/pages/user/about/about',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.getUserInfo({
            success: function (res) {
                var userInfo = res.userInfo
                var nickName = userInfo.nickName
                var avatarUrl = userInfo.avatarUrl
                var gender = userInfo.gender //性别 0：未知、1：男、2：女 
                var province = userInfo.province
                var city = userInfo.city
                var country = userInfo.country

                that.setData({
                    "avatarUrl": userInfo.avatarUrl,
                    "nickName": userInfo.nickName
                })
            }
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})