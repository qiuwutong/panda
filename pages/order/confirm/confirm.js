// pages/order/confirm/confirm.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // page 判断用户是在哪个页面进入交易状态页面
        "page": "",
        "title": "",//页面顶部导航的title
        "code": '',//交易的状态码

        "moregoods": {
            "info": [
                { "image": "../../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "255252" },
                { "image": "../../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "10001" },
                { "image": "../../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "2255" },
                { "image": "../../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "22550" },
            ]
        },
    },
    // 返回首页
    "returnTap": function () {
        wx.switchTab({
            url: '/pages/index/index',
        })
    },
    // 查看订单
    "lookTap": function () {
        if (this.data.page === "buy") {
            console.log('去到订单详情')
        } else if (this.data.page === "order") {
            wx.navigateTo({
                url: '/pages/order/order',
            })
        }
    },
    // 
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        var that = this;
        // 获取url传进来的page
        var page = options.page;
        var code = options.code;
        if (page === "buy") {
            this.setData({
                'page': page,
                "title": "支付成功",
                "code": code
            });
        } else if (page === "order") {
            this.setData({
                'page': page,
                "title": "交易成功",
                "code": code
            });
        }
        wx.setNavigationBarTitle({
            'title': that.data.title
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