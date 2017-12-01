import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from '@/config'

mongoose.connection.openUri(config.db.url)
const db = mongoose.connection
db.on('error', e => console.error(`mongodb error:${e}`))
db.once('open', () => {
  mongoose.Promise = bluebird
  console.log('mongodb connect success!')
})
