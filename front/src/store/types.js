import createModule from '@util/createModule'

export const test = createModule('test', {
  A: ['FETCH_ITEMS'],
  M: ['UPDATE_ITEMS']
})
