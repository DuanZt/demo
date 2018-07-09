import req from '../lib/request'

export default {

  getWelcome (cb, errorCb) {
    req('GET', '/api/test').then(cb).catch(errorCb)
  },
  uploadFile (data, cb, errorCb) {
    req('POST', '/api/test', null, data, 1).then(cb).catch(errorCb)
  }
}
