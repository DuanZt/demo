import req from '../lib/request'

export default {

  getWelcome (cb, errorCb) {
    req('GET', '/').then(cb).catch(errorCb)
  },
  uploadFile (data, cb, errorCb) {
    req('POST', '/', null, data, 1).then(cb).catch(errorCb)
  }
}
