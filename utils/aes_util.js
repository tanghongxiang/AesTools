const CryptoJS = require('./aes.js'); //引用AES源码js
/**
 * aes 解密方法
 */
function AesDecrypt(word, iv, key) {
  iv = CryptoJS.enc.Utf8.parse(iv)
  key = CryptoJS.enc.Utf8.parse(key)
  // 暂时不做Base64解密
  // let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  // let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let srcs = word
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
/**
 * aes 加密方法
 */
function AesEncrypt(word, iv, key) {
  iv = CryptoJS.enc.Utf8.parse(iv)
  key = CryptoJS.enc.Utf8.parse(key)
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
  // 暂时不做Base64加密
  // return encrypted.ciphertext.toString().toUpperCase();
}

/**
 * base64 加密方法
 */
function Base64Encode(val) {
  let str = CryptoJS.enc.Utf8.parse(val);
  let base64 = CryptoJS.enc.Base64.stringify(str);
  return base64;
}

/**
 * base64 解密方法
 */
function Base64Decode(val) {
  let words = CryptoJS.enc.Base64.parse(val);
  return words.toString(CryptoJS.enc.Utf8);
}


//暴露接口
module.exports = {
  AesEncrypt,
  AesDecrypt,
  Base64Encode,
  Base64Decode
}