import {article} from '@/store/types'
import articleApi from '@/api/articleApi'

const state = {
  list: {},
  size: 10,
  num: 0,
  item: {}
}

const actions = {
  [article.A.FETCH_LIST]: ({state, commit}, queryInfo = {}) => new Promise(async (resolve, reject) => {
    if (queryInfo.size) {
      commit(article.M.UPDATE_PAGE, queryInfo)
    } else {
      queryInfo.size = state.size
      queryInfo.num = state.num
    }
    try {
      const {data} = await articleApi.fetchArticleList(queryInfo)
      commit(article.M.UPDATE_LIST, data)
    } catch (e) {
    } finally {
      resolve()
    }
  }),
  [article.A.FETCH_ITEM]: ({state, commit}, id) => new Promise(async (resolve, reject) => {
    try {
      const {data} = await articleApi.fetchArticleItem(id)
      commit(article.M.UPDATE_ITEM, data)
    } catch (e) {
    } finally {
      resolve()
    }
  })
}

const mutations = {
  [article.M.UPDATE_LIST](state, list) {
    state.list = list
  },
  [article.M.UPDATE_ITEM](state, item) {
    state.item = item
  },
  [article.M.UPDATE_PAGE](state, pageInfo) {
    state.size = pageInfo.size
    state.num = pageInfo.num
  }
}

export default {
  actions,
  mutations,
  state
}
