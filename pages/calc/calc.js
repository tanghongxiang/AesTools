// pages/calc/calc.js
const CryptoJS = require('../../utils/aes_util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 偏移量
    ips_key: "i996needMoney996",
    // 编码方式
    encode_type: "UTF-8",
    // 填充类型（注：CBC）<算法/模式/补码方式>
    cipher: "AES/CBC/PKCS7Padding",
    // 私钥
    private_key: "18B49DE86CAD4401",
    // 加密&解密内容的title文字
    content_title: "待加密内容",
    // 加密&解密按钮的文字
    operate_btn_text: "加密",
    // 加密&解密内容的结果的title文字
    content_result_title: "解密后的内容",
    // 是否隐藏加密&解密后的内容
    result_hidden: true,
    // 待加密&解密的内容
    content_value: "",
    // 加密&解密的内容
    result_value: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ips_key = this.data.ips_key
    this.private_key = this.data.private_key
    this.content_value = this.data.content_value

    this.openType = options.openType
    if ("encryption" == this.openType) {
      // 加密
      this.setData({
        content_title: "待加密内容",
        operate_btn_text: "加密",
        content_result_title: "加密后的内容",
      })
    } else if ("decryption" == this.openType) {
      // 解密
      this.setData({
        content_title: "待解密内容",
        operate_btn_text: "解密",
        content_result_title: "解密后的内容",
      })
    } else {
      wx.navigateBack({
        delta: 0,
      })
    }
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

  },

  /**
   * 加密&解密按钮点击
   */
  onOperateClick: function (e) {
    if (this.checkoutParams() == false) {
      wx.showToast({
        title: '必要参数不能为空',
        icon: 'none',
      })
      return
    }
    this.setData({
      result_hidden: false
    })
    if ("encryption" == this.openType) {
      // 加密
      let res = this.encryptionContent(this.content_value)
      this.setData({result_value:res})
    } else if ("decryption" == this.openType) {
      // 解密
      let res = this.decryption(this.content_value)
      this.setData({result_value:res})
    } else {
      wx.showToast({
        title: '未知操作',
        icon: 'none',
      })
    }
  },

  /**
   * 检查必要参数是否为空
   */
  checkoutParams: function () {
    if (this.isEmpty(this.ips_key)) return false
    if (this.isEmpty(this.private_key)) return false
    if (this.isEmpty(this.content_value)) return false
    return true
  },

  /**
   * 判空
   */
  isEmpty: function (obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
      return true;
    } else {
      return false;
    }
  },

  /**
   * 加密content
   */
  encryptionContent: function (content) {
    return CryptoJS.AesEncrypt(content, this.ips_key, this.private_key)
  },

  /**
   * 解密content
   */
  decryption: function (content) {
    return CryptoJS.AesDecrypt(content, this.ips_key, this.private_key)
  },

  /**
   * 偏移量输入
   */
  onIpsInputListener: function (e) {
    this.ips_key = e.detail.value
  },

  /**
   * 偏移量输入
   */
  onPrivateKeyInputListener: function (e) {
    this.private_key = e.detail.value
  },

  /**
   * 待操作数据输入
   */
  onContentInputListener(e) {
    this.content_value = e.detail.value
  }

})