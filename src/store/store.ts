import { createStore } from 'vuex'

import { testData, testPosts, ColumnProps, PostProps } from '../TS/testData'
interface UserProps {
  isLogin: boolean,
  name?: string,
  age?: number
}
export interface GlobalDateProps {
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps
}
const store = createStore<GlobalDateProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'liang' }
    }
  }
})

export default store
