import Vue from 'vue';
import Vuex from 'vuex';
//集中数据
import { state } from './data.js'
//集中方法
import { mutations } from './func.js'
Vue.use(Vuex);


export default new Vuex.Store({
  state,
  mutations
})