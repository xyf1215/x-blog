import articleServ from '@/service/articleServ'

export default {
  async index(ctx) {
    ctx.body = await articleServ.list(ctx.query)
  },
  async show(ctx) {
    ctx.body = await articleServ.get(ctx.params.id)
  },
  async create(ctx) {
    ctx.body = await articleServ.save(ctx.request.body)
  },
  async update(ctx) {
    await articleServ.update(ctx.params.id, ctx.request.body)
  },
  async destory(ctx) {
    await articleServ.remove(ctx.request.body.id)
  }
}
