import createModule from '@/util/createModule'

export const appInfo = createModule('appInfo', {
  A: ['SERVER_INIT']
})

export const article = createModule('article', {
  A: ['FETCH_LIST', 'FETCH_ITEM'],
  M: ['UPDATE_LIST', 'UPDATE_PAGE', 'UPDATE_ITEM']
})
