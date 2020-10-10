export const mutations = {
  //相加方法
  add(state, param) {
    state.count = state.count + param.val
  },
  //save old
  addOld(state, param) {
    console.log(state)
    state.user[param.name] = param.val
  }
}