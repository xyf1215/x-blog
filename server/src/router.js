import Router from 'koa-router'
import homeAct from '@/action/homeAct'
import articleAct from '@/action/articleAct'

const router = new Router()

router.all('/', homeAct.index)

router.get('/article', articleAct.index)
router.post('/article', articleAct.create)
router.get('/article/:id', articleAct.show)
router.put('/article/:id', articleAct.update)
router.delete('/article', articleAct.destory)

export default router
