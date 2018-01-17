import {serv} from 'create-api'

export default {
  fetchArticleList: params => serv.get('/article', {params}),
  fetchArticleItem: id => serv.get(`/article/${id}`)
}
