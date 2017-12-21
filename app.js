//app.js
App({
    onLaunch: function () {

    },
    //授权设置
    "empower": function () {
        var that = this;
        wx.openSetting({
            // 打开用户授权设置页面
            "complete": function () {
                // 获取用户信息
                wx.getSetting({
                    "success": function (res) {
                        if (res.authSetting['scope.userInfo']) {
                            // 用户已点击授权

                        } else {
                            //用户没有授权继续授权
                            that.empower();
                        }
                    }
                })
            }
        })
    },

    // 获取用户信息
    "getInfo": function () {
        var that =this;
        wx.getUserInfo({
            //成功获取到用户信息
            "success": function (data) {
                wx.login({
                    success: function (res) {
                        if (res.code) {
                            //发送数据到后台获取token
                            wx.request({
                                'url': "https://xiongmao.camel.com.cn/api/v1/auth/wx_login",
                                'method': "POST",
                                'data': {
                                    'code': res.code,
                                    'encrypted_data': data.encryptedData,
                                    'iv': data.iv
                                },
                                'header': {
                                    'content-type': 'application/x-www-form-urlencoded'
                                },
                                success: function (info) {
                                    wx.setStorage({
                                        key: 'access_token',
                                        data: info.data.data.access_token ,
                                    })
                                }
                            })
                        }
                    },
                })
            },
            "fail": function () {//获取用户信息失败
                // 获取用户信息
                wx.getSetting({
                    "success": function (res1) {
                        that.empower();
                    }
                })

            }
        })
    },


    globalData: {
        userInfo: null,
    },
    //   接口url
    "url": 'https://xiongmao.camel.com.cn/api/v1/'
})