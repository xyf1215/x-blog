import {serv} from 'create-api'

export default {
  fetchArticleList: () => serv.get('/article')
}
