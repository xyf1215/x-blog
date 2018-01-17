import userServ from '@/service/userServ'

export default {
  async adminLogin(ctx) {

  },
  async index(ctx) {
    ctx.body = await userServ.list(ctx.query)
  },
  async show(ctx) {
    ctx.body = await userServ.get(ctx.params.id)
  },
  async create(ctx) {
    ctx.body = await userServ.save(ctx.request.body)
  },
  async update(ctx) {
    await userServ.update(ctx.params.id, ctx.request.body)
  },
  async destory(ctx) {
    await userServ.remove(ctx.request.body.id)
  }
}
