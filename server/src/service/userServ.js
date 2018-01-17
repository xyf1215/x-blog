import UserModel from '@/dao/userDao'
import {pagelize} from '@/util/dbTools'

export default {
  async checkAdminLogin(username, password) {
    
  },
  async list(queryInfo) {
    return pagelize(queryInfo, UserModel.find().page(queryInfo).order(queryInfo), UserModel.count())
  },
  async get(id) {
    return UserModel.findOne({_id: id})
  },
  async save(article) {
    return new UserModel(article).save()
  },
  async update(id, article) {
    return UserModel.findByIdAndUpdate(id, article)
  },
  async remove(id) {
    return UserModel.find({_id: id}).remove()
  }
}
