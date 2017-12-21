// pages/classify/classify.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "id": "0",
        "navs": [
            { "name": "热门推荐", "navId": 0 },
            { "name": "应季热销", "navId": 1 },
            { "name": "宝宝奶粉", "navId": 2 },
            { "name": "营养辅食", "navId": 3 },
            { "name": "喂养用品", "navId": 4 },
            { "name": "宝宝洗漱", "navId": 5 },
        ]
    },
    // 点击导航分类，切换商品和class
    navtap: function (e) {
            this.setData({
                "id": e.target.dataset.id
            })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '                      ' + "商品分类",
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