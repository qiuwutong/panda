// pages/buy/buy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "address": [{ "name": "韩梅梅", "add": "广东省广州市白云区石槎路396号", "phone": "145575585585" }],
        "goods": [
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "50", "sel": "XXL", "color": "白色", "num": 4 },
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "100", "sel": "XXL", "color": "蓝色", "num": 2 },
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "200", "sel": "XXL", "color": "绿色", "num": 10 },
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "100", "sel": "XXL", "color": "红色", "num": 8, }
        ],
    },
    // 点击填写收货地址
    "addressTap": function () {
        var that = this;
        wx.chooseAddress({
            success: function (res) {

                var address = [{ "name": res.userName, "add": res.provinceName + res.cityName + res.countyName + res.detailInfo, "phone": res.telNumber }]
                that.setData({
                    address: address
                });
                // 要把默认收货地址传给服务器保存
            }
        })
    },
    "btnTap":function(){
        wx.navigateTo({
            url: "/pages/order/confirm/confirm?page=buy&code=1",
        })
        wx.showToast({
            "title":"调用支付接口"
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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