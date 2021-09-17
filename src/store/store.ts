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
  },
  getters: {
    biggerColumnLen (state) {
      return state.columns.filter(c => c.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostByCId: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid)
    }
  }
})

export default store
