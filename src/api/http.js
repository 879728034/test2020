import axios from 'axios'

const request = axios.create({
  baseURL: '@/api',
  timeout: 1 * 1000,
  header: {
    // 'Content-Type': 'application/json; charset=gb2312',
    'Authorization': '22222222222222222222222222222222222',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

//请求拦截器
request.interceptors.request.use(
  config => {
    return config;
  }, err => {
    return err;
  })

//响应拦截器
request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return error;
  }
)

export function getAxios(url, params = {}) {
  params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
  return request({
    url: url,
    method: 'get',
    headers: {
    },
    params
  })
}
