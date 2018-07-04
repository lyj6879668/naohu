//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
            '/images/banner/b1.jpg',
            '/images/banner/b2.jpg',
            '/images/banner/b3.jpg'
        ],

        indicatorDots: false,
        autoplay: false,
        interval: 3000,
        duration: 800,
    },
    onLoad: function() {

    },
})