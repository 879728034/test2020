//import Mock from 'mockjs';
//const { mock } = require("mockjs");
//const Mock = require('mockjs');
const Mock = require('mockjs');
Mock.setup({
  timeout: '10-100'
})
let configArray = []
//获取并遍历当前文件夹除index.js以外的所有js
const files = require.context('.', true, /\.js$/);
files.keys().forEach(key => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
})
//注册所有的mock服务
configArray.forEach(item => {
  for (let [path, target] of Object.entries(item)) {
    Mock.mock(path, target);
  }
})

