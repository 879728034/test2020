import axios from 'axios'

const service = axios.create({
  timeout: 3 * 1000
})
//请求拦截器
service.interceptors.request.use(
  config => {
    return config
  }
  , error => {
    return error
  }
)

//响应拦截器
service.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status
    res.data = response.data;
    return res
  }
  , error => {
    return error
  }
)

//get 请求
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}
//静态
export function getjt(url, params = {}) {
  params.time = new Date().getTime()
  return service({
    url: url,
    method: 'get',
    headers: {

    },
    params
  })
}/**/
export default {
  get,
  getjt
}
