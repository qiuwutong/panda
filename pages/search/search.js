// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "show": true,
        "searchgoods": {
            "info": [
                { "image": "../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "255252" },
                { "image": "../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "10001" },
                { "image": "../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "2255" },
                { "image": "../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "22550" },
            ]
        }
    },
    // 搜索
    searching: function (e) {
        console.log(e.detail)
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