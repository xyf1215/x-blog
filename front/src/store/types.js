import createModule from '@/util/createModule'

export const appInfo = createModule('appInfo', {
  A: ['SERVER_INIT']
})

export const test = createModule('test', {
  A: ['FETCH_ITEMS'],
  M: ['UPDATE_ITEMS']
})

export const articleList = createModule('articleList', {
  A: ['FETCH_LIST'],
  M: ['UPDATE_LIST']
})
