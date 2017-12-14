export const config = {
  timeout: 1000
}

const statusCode = {
  OK: 200
}

export const initAxios = serv => {
  serv.interceptors.response.use(({data}) => data)
  serv.interceptors.response.use(topData => {
    const {code, message, data} = topData
    if (statusCode.OK === code) {
      return topData
    }
    const err = new Error()
    err.code = code
    err.data = data
    err.message = message
    throw err
  })
}
