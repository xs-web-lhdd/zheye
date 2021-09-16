<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input @blur="validateEmail" v-model="emailRef.val" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList, { ColumnProps } from './components/Column List.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'liang'
}
// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: 'test1的专栏',
//     description: '13422124234232',
//     avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
//   },
//   {
//     id: 2,
//     title: 'test2的专栏',
//     description: '13422124234232'
//     // avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
//   },
//   {
//     id: 3,
//     title: 'test1的专栏',
//     description: '13422124234232345555555555555555555555555555',
//     avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
//   },
//   {
//     id: 4,
//     title: 'test2的专栏',
//     description: '13422124234232',
//     avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
//   }
// ]

const emailValidate = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
export default defineComponent({
  name: 'App',
  components: { GlobalHeader },
  setup () {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailValidate.test(emailRef.val)) {
        // 没通过校验
        emailRef.error = true
        emailRef.message = 'should be valid email'
      }
    }
    return { currentUser, emailRef, validateEmail }
  }
})
</script>

<style lang="scss">
.form-text{
  color: red;
}
</style>
