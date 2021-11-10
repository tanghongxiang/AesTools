// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
    
  },

  /**
   * 加密按钮点击事件
   */
  onEncryptionClick:function(e){
    wx.navigateTo({
      url: '../calc/calc?openType=encryption',
    })
  },

   /**
   * 解密按钮点击事件
   */
  onDecryptionClick:function(e){
    wx.navigateTo({
      url: '../calc/calc?openType=decryption',
    })
  }

})
