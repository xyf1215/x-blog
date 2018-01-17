import _ from 'lodash'

export const extraOperaters = {
  page: schema => {
    schema.query.page = function(pageInfo = {}) {
      let {size, num} = pageInfo
      if (_.isUndefined(size) || _.isUndefined(num)) {
        return this
      }
      pageInfo.$page = true
      pageInfo.size = parseInt(size, 10)
      pageInfo.num = parseInt(num, 10)
      const skip = pageInfo.num === 0 ? 0 : (pageInfo.num * pageInfo.size)
      const limit = skip + pageInfo.size
      return this.skip(skip).limit(limit)
    }
    return schema
  },
  order: schema => {
    schema.query.order = function(pageInfo = {}) {
      const {order, orderBy} = pageInfo
      if (_.isUndefined(orderBy)) {
        return this
      }
      pageInfo.$order = true
      return this.sort({[orderBy]: order === 'asc' ? 1 : -1})
    }
    return schema
  }
}

export const pagelize = (queryInfo, resultQuery, countQuery) => new Promise(async (resolve, reject) => {
  const [result, count] = await Promise.all([resultQuery, countQuery])
  const {$page, $order} = queryInfo
  if (!$page && !$order) {
    resolve(result)
  } else {
    const nodeName = queryInfo.nodeName || 'pdata'
    const resp = {[nodeName]: result}
    resp.nodeName = nodeName
    resp.total = count
    if ($page) {
      resp.size = queryInfo.size
      resp.num = queryInfo.num
      resp.totalPage = Math.ceil(count / queryInfo.size)
    }
    if ($order) {
      resp.orderBy = queryInfo.orderBy
      resp.order = queryInfo.order
    }
    resolve(resp)
  }
})

export const register = schema => Object.keys(extraOperaters).reduce((enhanceSchema, operater) => extraOperaters[operater](enhanceSchema), schema)
