import axios from 'axios'
import store from '@/store/store'

// 创建一个axios的实例：
const instance = axios.create({
  // baseURl会自动将请求地址拼到url前面
  baseURL: 'https://www.fastmock.site/mock/969f8b5d69afed1b25baedfaaf6c502c/zhihu',
  withCredentials: true,
  timeout: 10000
})

// 封装get请求
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, (err) => {
      reject(err)
    })
  })
}

// 封装post请求
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, (err) => {
      reject(err)
    })
  })
}

// 请求拦截：
instance.interceptors.request.use((config) => {
  store.commit('loading', true)
  return config
})
// 响应拦截：
instance.interceptors.response.use((res) => {
  store.commit('loading', false)
  return res
})
