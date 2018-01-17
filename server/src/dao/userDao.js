import mongoose from 'mongoose'
import moment from 'moment'
import {register} from '@/util/dbTools'

const schema = register(new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    min: 32,
    max: 32,
    lowercase: true,
    required: true
  },
  lastLoginTime: {
    type: Date
  },
  active: {
    type: Boolean,
    default: false
  }
}, {
  toJSON: {
    virtuals: true
  }
}))

schema.virtual('lastLoginTimeStr').get(function() {
  return this.lastLoginTime ? moment(this.lastLoginTime).format('YYYY-MM-DD HH:mm:SS') : ''
})

export default mongoose.model('user', schema, 'user')
