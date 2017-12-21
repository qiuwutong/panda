// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "delBtnWidth": 128,
        "active": 1,
        "orderList": [
            {
                "time": "2017-09-15    20:12",
                "state": '待付款',
                "content": "是打发叫对方拉科技的发卡机待付款垃圾分类快捷",
                "sel": "龙凤呈祥",
                "color": "小号红包",
                "num": "2",
                "price": '20.80',
                "yunfei": '10.00',
                "code": '1'     //1. 待付款    2. 待发货  3. 待收货  4. 交易成功   5. 已关闭
            },
            {
                "time": "2017-09-15    20:12",
                "state": '待发货',
                "content": "是打发叫对方拉科技的发卡机待付款垃圾分类快捷",
                "sel": "龙凤呈祥",
                "color": "小号红包",
                "num": "4",
                "price": '250.80',
                "yunfei": '10.00',
                "code": '2'     //1. 待付款    2. 待发货  3. 待收货  4. 交易成功   5. 已关闭
            },
            {
                "time": "2017-09-15    20:12",
                "state": '待收货',
                "content": "是打发叫对方拉科技的发卡机待付款垃圾分类快捷",
                "sel": "龙凤呈祥",
                "color": "小号红包",
                "num": "1",
                "price": '210.80',
                "yunfei": '10.00',
                "code": '3'     //1. 待付款    2. 待发货  3. 待收货  4. 交易成功   5. 已关闭
            },
            {
                "time": "2017-09-15    20:12",
                "state": '交易成功',
                "content": "是打发叫对方拉科技的发卡机待付款垃圾分类快捷",
                "sel": "龙凤呈祥",
                "color": "小号红包",
                "num": "2",
                "price": '120.80',
                "yunfei": '10.00',
                "code": '4'     //1. 待付款    2. 待发货  3. 待收货  4. 交易成功   5. 已关闭
            },
            {
                "time": "2017-09-15    20:12",
                "state": '已关闭',
                "content": "是打发叫对方拉科技的发卡机待付款垃圾分类快捷",
                "sel": "龙凤呈祥",
                "color": "小号红包",
                "num": "2",
                "price": '220.80',
                "yunfei": '10.00',
                "code": '5'     //1. 待付款    2. 待发货  3. 待收货  4. 交易成功   5. 已关闭
            }
        ]
    },
    "navtap": function (e) {
        this.setData({
            "active": e.target.dataset.index
        })
    },
    // 取消订单
    "cancelTap": function () {
        wx.showModal({
            title: '提示',
            content: '确定要取消订单？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }
            }
        })
    },
    // 确认收货
    "confirmTap": function () {
        wx.showModal({
            title: '提示',
            content: '马上确认收货吗？',
            success: function (res) {
                if (res.confirm) {
                //   用户确认收货
                wx.navigateTo({
                    url: '/pages/order/confirm/confirm?page=order',
                })
                }
            }
        })
    },
    // 查看物流
    "expressTap":function(){
        wx.navigateTo({
            url: '/pages/order/express/express',
        })
    },
    "touchstart": function (e) {
        var code = e.currentTarget.dataset.code;
        // 判断订单的状态是否为   4. 交易成功   5. 已关闭
        if (code == 4 || code == 5) {
            //判断是否只有一个触摸点
            if (e.touches.length == 1) {
                this.setData({
                    //记录触摸起始位置的X坐标
                    startX: e.touches[0].clientX
                });
            }
        } else {
            // 状态不是4. 交易成功   5. 已关闭    return
            return;
        }
    },
    //触摸时触发，手指在屏幕上每移动一次，触发一次
    "touchmove": function (e) {
        var code = e.currentTarget.dataset.code;
        // 判断订单的状态是否为   4. 交易成功   5. 已关闭
        if (code == 4 || code == 5) {
            var that = this
            if (e.touches.length == 1) {
                //记录触摸点位置的X坐标
                var moveX = e.touches[0].clientX;
                //计算手指起始点的X坐标与当前触摸点的X坐标的差值
                var disX = that.data.startX - moveX;
                //delBtnWidth 为右侧按钮区域的宽度
                var delBtnWidth = that.data.delBtnWidth;
                var txtStyle = "";
                if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
                    txtStyle = "left:0px";
                } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
                    txtStyle = "left:-" + disX + "px";
                    if (disX >= delBtnWidth) {
                        //控制手指移动距离最大值为删除按钮的宽度
                        txtStyle = "left:-" + delBtnWidth + "px";
                    }
                }
                //获取手指触摸的是哪一个item
                var index = e.currentTarget.dataset.index;
                var list = that.data.orderList;
                //将拼接好的样式设置到当前item中
                list[index].txtStyle = txtStyle;
                //更新列表的状态
                this.setData({
                    orderList: list
                });
            }
        } else {
            // 状态不是4. 交易成功   5. 已关闭    return
            return;
        }
    },
    "touchend": function (e) {
        var code = e.currentTarget.dataset.code;
        // 判断订单的状态是否为   4. 交易成功   5. 已关闭
        if (code == 4 || code == 5) {
            var that = this
            if (e.changedTouches.length == 1) {
                //手指移动结束后触摸点位置的X坐标
                var endX = e.changedTouches[0].clientX;
                //触摸开始与结束，手指移动的距离
                var disX = that.data.startX - endX;
                var delBtnWidth = that.data.delBtnWidth;
                //如果距离小于删除按钮的1/2，不显示删除按钮
                var txtStyle = disX > delBtnWidth / 2 ? "left:-" + "128" + "rpx" : "left:0px";
                //获取手指触摸的是哪一项
                var index = e.currentTarget.dataset.index;
                var list = that.data.orderList;
                list[index].txtStyle = txtStyle;
                //更新列表的状态
                that.setData({
                    orderList: list
                });
            }

        } else {
            // 状态不是4. 交易成功   5. 已关闭    return
            return;
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