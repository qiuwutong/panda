// pages/goods/goods.js
// 引入规格，颜色的公共js
var utiSelect = require('../../utils/select.js');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        "model_show": false,//控制规格选择隐藏和显示  false-隐藏
        "bottom_show": true,//控制规格选择底部样式     true-显示 加入购物车 立即购买        false 显示 确认
        "swiperCurrent": 0,
        'buy': '',//判断是点击加入购物车 0      还是立即购买 1；
        // 商品规格
        "sel_size": "",
        "sel_color": "",
        "detailNum": "1",//商品选择的数量

        // 轮播图数据
        "swiper": {
            'imgUrls': [
                "../../images/sp@3x.png",
                "../../images/sp@3x.png",
                "../../images/sp@3x.png"
            ],
            " interval": true
        },
        // 评论数据
        "evaluate_info": [
            {
                "img": "../../images/QQ@2x.png",
                "name": "啊哈哈哈",
                "year": "2017-11-11",
                "time": "17:04",
                "color": "粉色",
                "score": 2,
                "conten": "身份卡蝴蝶卡喊口号好看的建安费喝酒哈咖啡好看考虑了房价阿拉进来看了发件打卡了",
                "images": ["../../images/spp@2x.png", "../../images/spp@2x.png", "../../images/spp@2x.png"]
            }
        ],
        // 规格选择数据
        "details": [
            {
                "img": "../../images/spp@2x.png",
                "price": '443',
                "kuchun": '37',
                "size": ["XS", "S", "M", "L", "XL", "XXL"],
                "color": ["蓝色", "红色", "粉色", "白色", "绿色", "黄色"]
            }
        ]
    },
    //轮播图的切换事件  
    swiperChange: function (e) {
        //只要把切换后当前的index传给<swiper>组件的current属性即可  
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
    //点击指示点切换  
    chuangEvent: function (e) {
        this.setData({
            swiperCurrent: e.currentTarget.id
        })
    },
    // 点击显示model
    model_showTap: function (e) {
        utiSelect.model_show(e, this);
    },
    // 点击关闭model
    closeTap: function () {
        utiSelect.close(this)
    },
    // 点击选择规格
    "sizeTap": function (e) {
        utiSelect.size(e, this)
    },
    // 点击选择规格
    "colorTap": function (e) {
        utiSelect.color(e, this)
    },
    // 点击选择数量
    "btnTap": function (e) {
        utiSelect.btn(e, this)
    },
    // 点击购物车
    "carTap": function () {
        wx.switchTab({
            url: '/pages/shopcart/shopcart',
        })
    },
    // 点击加入购物车或者立即购买
    "buyTap": function (e) {
        this.setData({
            "model_show": true,
            "bottom_show": false,
            "buy": e.target.dataset.buy
        })
    },
    // 点击确认  或者 点击规格数量选择model的加入购物车
    "jionTap": function () {
        if (this.data.sel_color && this.data.sel_size) {
            if (this.data.buy == 0) {
                // 添加购物车
                wx.showToast({
                    title: '添加购物车成功',
                })
                this.setData({
                    "model_show": false,
                })
            } else if ((this.data.buy == 1)) {
                // 购买商品
                wx.navigateTo({
                    url: '/pages/buy/buy',
                })
                this.setData({
                    "model_show": false,
                })
            }

        } else {
            wx.showModal({
                title: '提示',
                content: '请选择商品的规格和颜色',
                showCancel: false
            })
        }
    },
    // 点击规格数量选择model的立即购买
    "nowTap": function () {
        if (this.data.sel_color && this.data.sel_size) {
            // 购买商品
            wx.navigateTo({
                url: '/pages/buy/buy',
            })
            this.setData({
                "model_show": false,
            })
        } else {
            wx.showModal({
                title: '提示',
                content: '请选择商品的规格和颜色',
                showCancel: false
            })
        }
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