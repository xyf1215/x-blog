import {appInfo} from '@/store/types'

const state = {
}

const actions = {
  [appInfo.A.SERVER_INIT]: ({commit}) => new Promise(async (resolve, reject) => {
    console.log('server init...')
    resolve()
  })
}

const mutations = {
}

export default {
  actions,
  mutations,
  state
}
