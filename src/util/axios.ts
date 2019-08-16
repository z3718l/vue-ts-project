import axios from 'axios'

const instance = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/163742/",
  timeout: 15000
})

instance.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default instance
