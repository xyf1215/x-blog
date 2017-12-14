import {articleList} from '@/store/types'
import articleApi from '@/api/articleApi'

const state = {
  articleList: {}
}

const actions = {
  [articleList.A.FETCH_LIST]: ({commit}) => new Promise(async (resolve, reject) => {
    try {
      const {data} = await articleApi.fetchArticleList()
      commit(articleList.M.UPDATE_LIST, data)
    } catch (e) {
    } finally {
      resolve()
    }
  })
}

const mutations = {
  [articleList.M.UPDATE_LIST](state, articleList) {
    state.articleList = articleList
  }
}

export default {
  actions,
  mutations,
  state
}
