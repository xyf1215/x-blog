import '@/dao/init'
import Koa from 'koa'
import config from '@/config'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import apiWrap from '@/middleware/api-wrap'
import router from '@/router'

const app = new Koa()
app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(apiWrap())
app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port)
console.log(`server is starting at port ${config.port}`)
