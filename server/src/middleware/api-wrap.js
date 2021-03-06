export default () => async (ctx, next) => {
  const wrapInfo = {
    code: 200,
    message: 'SUCCESS',
    data: null
  }
  try {
    await next()
  } catch (e) {
    if (typeof e === 'object') {
      const {message, code} = e
      wrapInfo.message = message
      wrapInfo.code = e instanceof Error ? 500 : code
    } else {
      wrapInfo.message = e
      wrapInfo.code = 500
    }
  }
  wrapInfo.data = ctx.body
  ctx.body = wrapInfo
}
