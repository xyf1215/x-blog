import ArticleModel from '@/dao/articleDao'
import {pagelize} from '@/util/dbTools'

export default {
  async list(queryInfo) {
    return pagelize(queryInfo, ArticleModel.find().page(queryInfo).order(queryInfo), ArticleModel.count())
  },
  async get(id) {
    return ArticleModel.findOne({_id: id})
  },
  async save(article) {
    return new ArticleModel(article).save()
  },
  async update(id, article) {
    return ArticleModel.findByIdAndUpdate(id, article)
  },
  async remove(id) {
    return ArticleModel.find({_id: id}).remove()
  }
}
