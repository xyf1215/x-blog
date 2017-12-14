import Router from 'koa-router'
import homeAct from '@/action/homeAct'
import articleAct from '@/action/articleAct'

const router = new Router()

router.all('/', homeAct.index)

const api = new Router({
  prefix: '/api'
})

api.get('/article', articleAct.index)
api.post('/article', articleAct.create)
api.get('/article/:id', articleAct.show)
api.put('/article/:id', articleAct.update)
api.delete('/article', articleAct.destory)

router.use('', api.routes(), api.allowedMethods())
export default router
