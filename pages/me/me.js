//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        thumb: '',
        nickname: '',
    },
    onLoad: function() {
        var self = this;
        /**
         * 获取用户信息
         */
        // wx.getUserInfo({
        //     success: function (res) {
        //         self.setData({
        //             thumb: res.userInfo.avatarUrl,
        //             nickname: res.userInfo.nickName
        //         })
        //     }
        // })
    },
})