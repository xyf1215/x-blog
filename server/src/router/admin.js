import Router from 'koa-router'
import userAct from '@/action/userAct'

const api = new Router({
  prefix: '/api/admin'
})

// api.get('/article', articleAct.index)
// api.post('/article', articleAct.create)
// api.get('/article/:id', articleAct.show)
// api.put('/article/:id', articleAct.update)
// api.delete('/article', articleAct.destory)

export default api
