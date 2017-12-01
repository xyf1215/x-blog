import mongoose from 'mongoose'
import moment from 'moment'
import {register} from '@/util/dbTools'

const schema = register(new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  publish: {type: Boolean, default: false}
}, {
  toJSON: {
    virtuals: true
  }
}))

schema.virtual('timeStr').get(function() {
  return moment(this.time).format('YYYY-MM-DD HH:mm:SS')
})

export default mongoose.model('articles', schema)
