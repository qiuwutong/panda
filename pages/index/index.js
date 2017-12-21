const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        "swiperCurrent": 0,
        "isHideLoadMore": false,
        // 轮播图数据
        "swiper": {
            "imgUrls": [
                '../../images/Figure2.png',
                '../../images/Figure2.png',
                '../../images/Figure2.png'
            ],
            " interval": true
        },

        // 新品推荐
        "newgoods": {
            "info": [
                { "image": "../../images/sp@3x.png", "content": '乐天巧克力涂层饼干', "hot": "20", "original": '30' },
                { "image": "../../images/sp@3x.png", "content": '乐天巧克力涂层饼干', "hot": "20", "original": '30' },
                { "image": "../../images/sp@3x.png", "content": '乐天巧克力涂层饼干', "hot": "20", "original": '30' },
                { "image": "../../images/sp@3x.png", "content": '乐天巧克力涂层饼干', "hot": "20", "original": '30' },
                { "image": "../../images/sp@3x.png", "content": '乐天巧克力涂层饼干', "hot": "20", "original": '30' },
            ]
        },
        // 人气热销
        "sel_goods": {
            "info": [
                { "image": "../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "255252" },
                { "image": "../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "10001" },
                { "image": "../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "2255" },
                { "image": "../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "22550" },
            ]
        }
    },
    //轮播图的切换事件  
    swiperChange: function (e) {
        //只要把切换后当前的index传给<swiper>组件的current属性即可  
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
    // 点击搜索
    searchtap: function () {
        wx.navigateTo({
            url: '../search/search',
        })
    },
    //点击指示点切换  
    chuangEvent: function (e) {
        this.setData({
            swiperCurrent: e.currentTarget.id
        })
    },
    "goodsTap": function () {
        wx.navigateTo({
            url: '/pages/goods/goods',
        })
    },
    "moreTap": function () {
        wx.navigateTo({
            url: '/pages/index/detailList/detailList',
        })
    },
    "classifyTap": function () {
        wx.navigateTo({
            url: '/pages/classify/goods/goods',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // 
    // 页面开始加载
    onLoad: function (options) {
        const access_token = wx.getStorageSync("access_token");
        console.log(access_token);
        var that = this;
        app.getInfo();
        wx.request({
            url: app.url + 'home/banner?type=1',
            data: {
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function (res) {
                console.log(res)
            }
        });

 
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
        var that = this;
        this.setData({
            "isHideLoadMore": false
        });
        setTimeout(function () {
            that.setData({
                "isHideLoadMore": true
            });
        }, 2000)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})