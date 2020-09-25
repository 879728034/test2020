export const mutations = {
  //相加方法
  addFunc(state, param) {
    state.count = state.count + param.val
  },
  //add old
  addOld(state, param) {
    console.log(state)
    state.user[param.name] = param.val
  }
}