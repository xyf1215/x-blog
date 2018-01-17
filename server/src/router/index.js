import Router from 'koa-router'
import frontApi from './front'
import adminApi from './admin'
import homeAct from '@/action/homeAct'

const router = new Router()
router.all('/', homeAct.index)
router.use('', frontApi.routes(), frontApi.allowedMethods())
// router.use('', adminApi.routes(), adminApi.allowedMethods())

export default router
