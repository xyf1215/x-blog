import {test} from '@store/types'

const state = {
  items: []
}

const actions = {
  [test.A.FETCH_ITEMS]({commit}) {
    return new Promise((resolve, reject) => {
      commit(test.M.UPDATE_ITEMS, [{
        id: 1,
        name: 'x',
        age: 17
      }, {
        id: 2,
        name: 'h',
        age: 11
      }])
      resolve()
    })
  }
}

const mutations = {
  [test.M.UPDATE_ITEMS](state, items) {
    state.items = items
  }
}

export default {
  actions,
  mutations,
  state
}
