// pages/index/detailList/detailList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图数据
        "swiperCurrent":0,
        "swiper": {
            'imgUrls': [
                '../../../images/Figure2.png',
                '../../../images/Figure2.png',
                '../../../images/Figure2.png'
            ],
            " interval": true
        },
    },
    //轮播图的切换事件  
    swiperChange: function (e) {
        //只要把切换后当前的index传给<swiper>组件的current属性即可  
        this.setData({
            "swiperCurrent": e.detail.current
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