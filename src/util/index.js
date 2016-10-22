// import Vue from 'vue'
export default {
  zpost (url, data) {
    return new Promise(function (resolve, reject) {
      const timeout = 5000
      console.log('zpost post-data:', data)
      var xhr = window.$.post(url, data)

      var t = setTimeout(function () {
        console.log('zpost: timeout', url)
        xhr.abort()
        reject({
          ret: 0,
          code: -1,
          msg: '请求超时，请检查网络'
        })
      }, timeout)

      xhr.then(function (response) {
        clearTimeout(t)
        console.log('zpost get-response:', response)
        if (response.ret === 1) {
          resolve(response)
        } else {
          reject(response)
        }
      }, function (response) {
        clearTimeout(t)
        console.log(response)
        reject({
          ret: 0,
          code: -1,
          msg: 'HTTP状态错误, 您的网络供应商可能劫持了您的网络'
        })
      })
    })
  }
}
