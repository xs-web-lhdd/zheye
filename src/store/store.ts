import { createStore } from 'vuex'
import { get } from '../utils/request'

import { testData, testPosts, ColumnProps, PostProps } from '../TS/testData'
interface UserProps {
  isLogin: boolean,
  name?: string,
  age?: number,
  columnId?: number
}
export interface GlobalDateProps {
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps,
  loading: boolean
}
const store = createStore<GlobalDateProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false, name: 'liang', columnId: 1 },
    loading: false
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'liang' }
    },
    createPost (state, newPost) {
      state.posts.push(newPost)
    },
    getColumn (state, result) {
      state.columns = result
    },
    // 加载。。。
    loading (state, value) {
      state.loading = value
    }
  },
  actions: {
    // 获取所有专刊：
    async getColumn (state) {
      const result: any = await get('/column')
      const { data } = result
      state.commit('getColumn', data)
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
