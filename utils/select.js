// 选择商品规格  颜色 的js事件
// 添加商品到购物车
function jion(that) {
    if (that.data.sel_color && that.data.sel_size) {
        wx.showToast({
            title: '添加购物车成功',
        })
        that.setData({
            "model_show": false,
        })
    } else {
        wx.showModal({
            title: '提示',
            content: '请选择商品的规格和颜色',
            showCancel: false
        })
    }
}

// 点击显示model
function model_show(e,that) {
    var index = e.target.dataset.index
    that.setData({
        "bottom_show": true,
        "model_show": true,
        "index":index
    })
}
// 点击关闭model
function close(that) {
    that.setData({
        "model_show": false
    })
}
// 点击选择规格
function size(e, that) {
    that.setData({
        "sel_size": e.target.dataset.val,//商品规格
        "sizeid": e.target.dataset.id,//用来判断当前选中的规格 active
    })
}
// 点击选择规格
function color(e, that) {
    that.setData({
        "sel_color": e.target.dataset.val,//商品颜色
        "colorid": e.target.dataset.id,//用来判断当前选中的颜色   active
    })
}
// 点击选择数量
function btn(e, that) {
    var num = that.data.detailNum;
    if (e.target.dataset.id == "left") {
        num--;
        if (num = 0) {
            num == 0;
        }
        that.setData({
            "detailNum": num,
        })
    } else if (e.target.dataset.id == "right") {
        num++;
        that.setData({
            "detailNum": num,
        })
    }
}

module.exports.jionTap = jion;
module.exports.model_show = model_show;
module.exports.close = close;
module.exports.size = size;
module.exports.color = color;
module.exports.btn = btn;