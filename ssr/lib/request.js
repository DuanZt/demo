import axios from 'axios'
//import store from '../store'
import config from './config'
import {Message} from 'element-ui'

axios.interceptors.request.use(config => {
  return config
}, err => {
  Message.error({message: '请求超时!'})
  return Promise.resolve(err)
})
axios.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.status === 'error') {
    Message.error({message: data.data.msg})
    return
  }
  return data
}, err => {
  if (err.response.status === 504 || err.response.status === 404) {
    Message.error({message: '服务器被吃了⊙﹏⊙∥'})
  } else if (err.response.status === 403) {
    Message.error({message: '权限不足,请联系管理员!'})
  } else {
    Message.error({message: '未知错误!'})
  }
  return Promise.resolve(err)
})

export default async function request (method, url, query, data, fileFlag) {
  let axiosOpt = {
    method: method,
    url: url,
    // 设置api baseurl，上线的时候修改config.js , 使用proxyTable 只支持get跨域
    baseURL: config.baseURL,
    data: data,
    query: query,
    withFile: fileFlag
  }

  if (axiosOpt.withFile) {
    Object.assign(axiosOpt, { headers: {
      'Content-Type': 'multipart/form-data'
    }})
  }

  try {
    // 开始请求
    const result = await axios(axiosOpt)
    console.log(result)

    if (result.status === 200 && result.statusText === 'OK') {
      if (result.data.success) {
        return result.data.results || true
      } else {
        // 请求失败的 toast
        return false
      }
    } else {
      return false
    }
  } catch (e) {
    // 请求失败的 toast
    return false
  }
}
