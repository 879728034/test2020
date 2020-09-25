import http from './axios.js'

// let bsae_api = process.env.BASE_API ? './' + process.env.BASE_API : '..' //获取项目api请求地址

const getUserInfoById = () => http.getjt('../../static/data.json')
const getUserList = () => http.get('/user/list')


export default {
  getUserInfoById,
  getUserList
}