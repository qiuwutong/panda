// pages/shopcart/shopcart.js
// 引入规格，颜色的公共js
var utiSelect = require('../../utils/select.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "shopcartNum": 1,//购物车的商品种类
        "total": "",//商品的总价
        "selectAll": '',//全选状态
        // 编辑功能
        "toptext": "编辑",

        // 商品规格
        "sel_size": "",
        "sel_color": "",
        "detailNum": "1",//商品选择的数量


        "flag": true,//判断页面是否为编辑状态
        // 购物车为空的商品数据
        "moregoods": {
            "info": [
                { "image": "../../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "255252" },
                { "image": "../../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "10001" },
                { "image": "../../../images/Figure4.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "2255" },
                { "image": "../../../images/Figure5.png", "content": '康卡斯系列 黑色表盘精钢表带男士机械腕表', "Price": "22550" },
            ]
        },
        // 购物车商品数据
        "shopcart": [
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "50", "sel": "XXL", "color": "白色", "num": 4, "selected": true },
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "100", "sel": "XXL", "color": "蓝色", "num": 2, "selected": true },
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "200", "sel": "XXL", "color": "绿色", "num": 10, "selected": true },
            { "image": "../../../images/Figure4.png", "content": '程伟婷同款。让世界更美好Brats无限运动耳机', "Price": "100", "sel": "XXL","color":"红色", "num": 8, "selected": true }
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
    // 点击编辑按钮
    "bianjiTap": function () {
        if (this.data.flag) {
            var shopcart = this.data.shopcart;
            // 遍历
            for (var i = 0; i < shopcart.length; i++) {
                shopcart[i].selected = false;
            }
            this.setData({
                "toptext": "完成",
                "flag": false,
                "shopcart": shopcart,
                "selectAll": false,
            })
        } else {
            // 点击全选事件
            var selectAll = this.data.selectAll;
            // 取反操作
            selectAll = !selectAll;
            // 购物车数据，关键是处理selected值
            var shopcart = this.data.shopcart;
            // 遍历
            for (var i = 0; i < shopcart.length; i++) {
                shopcart[i].selected = selectAll;
            }
            // 数据回显
            this.setData({
                "toptext": "编辑",
                "flag": true,
                "selectAll": selectAll,
                "shopcart": shopcart
            })
            this.sum();
        }
    },
    // 点击单选按钮
    "select": function (e) {
        var index = e.target.dataset.index;
        var selected = this.data.shopcart[index].selected;
        var shopcart = this.data.shopcart;
        shopcart[index].selected = !selected;
        this.setData({
            "shopcart": shopcart,
        })
        this.sum();
        this.selectAllTap();
    },
    // 商品数量的加减
    "numTap": function (e) {
        
        var index = e.target.dataset.index;
        var num = this.data.shopcart[index].num;
        // 获取商品当前数量
        if (e.target.dataset.id == "left") {
            // 点击自减
            if (num == 0) {
                num = 0;
            } else {
                num--;
            }
            var shopcart = this.data.shopcart;
            shopcart[index].num = num;
            this.setData({
                "shopcart": shopcart,
            })
            this.sum();
        } else if (e.target.dataset.id == "right") {
            // 点击自增
            num++;
            var shopcart = this.data.shopcart;
            shopcart[index].num = num;

            this.setData({
                "shopcart": shopcart,
            })
            this.sum();
        }
    },
    "selectAllTap": function (e) {
        if (!e) {
            // 
            var shopcart = this.data.shopcart;
            var selectAll = "true";
            // 遍历
            for (var i = 0; i < shopcart.length; i++) {
                if (!shopcart[i].selected) {
                    selectAll = false;
                }
                // shopcart[i].selected = selectAll;
            }
            this.setData({
                "selectAll": selectAll,
                " shopcart": shopcart
            });
        } else {
            // 点击全选事件
            var selectAll = this.data.selectAll;
            // 取反操作
            selectAll = !selectAll;
            // 购物车数据，关键是处理selected值
            var shopcart = this.data.shopcart;
            // 遍历
            for (var i = 0; i < shopcart.length; i++) {
                shopcart[i].selected = selectAll;
            }
            this.setData({
                "selectAll": selectAll,
                "shopcart": shopcart
            });
            this.sum();
        }
    },
    // 计算商品总计
    "sum": function () {
        var shopcart = this.data.shopcart;
        // 计算总金额
        var total = 0;
        for (var i = 0; i < shopcart.length; i++) {
            if (shopcart[i].selected) {
                total += shopcart[i].num * shopcart[i].Price;
            }
        }
        // 写回经点击修改后的数组
        this.setData({
            "shopcart": shopcart,
            "total": total
        });
    },
    // 立即购买
    'buyTap':function(){
            wx.navigateTo({
                url: '/pages/buy/buy',
            })
    },
    // 删除所选
    "delTap": function () {
        var arr = this.data.shopcart;
        var shopcart = [];
        // 遍历
        for (var i = 0; i < arr.length; i++) {
            if (!arr[i].selected) {
                shopcart.push(arr[i]);
            }
        }
        if (!shopcart.length) {
            this.setData({
                "flag": true
            });
        }
        // 写回经点击修改后的数组
        this.setData({
            "shopcart": shopcart,
            "shopcartNum": shopcart.length
        });
    },
    // 点击显示model
    model_showTap: function (e) {
        utiSelect.model_show(e,this);
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
    // 点击确定
    "jionTap":function(){

        var shopcart = this.data.shopcart;
        var index = this.data.index;
        shopcart[index].sel = this.data.sel_size;
        shopcart[index].color = this.data.sel_color;
        shopcart[index].num = this.data.detailNum;
        this.setData({
            "shopcart": shopcart,
            "model_show": false
        });

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.sum();
        // 购物车商品的品种数量
        this.setData({
            "shopcartNum": this.data.shopcart.length
        })
        // 全选
        this.selectAllTap();
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
        // 购物车页面页面隐藏，保存购物车商品
                console.log("隐藏")
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