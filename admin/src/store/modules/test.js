import {test} from '@store/types'

const state = {
  items: []
}

const actions = {
  [test.A.FETCH_ITEMS]({commit}) {
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
