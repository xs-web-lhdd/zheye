<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">电子邮箱</label>
        <validate-input ref="inputRef" placeholder="请输入邮箱地址" type="text" :rules="emailRules" v-model="emailValue"></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input placeholder="请输入密码" type="password" :rules="pwdRules" v-model="pwdValue"></validate-input>
      </div>
      <template v-slot:submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList, { ColumnProps } from './components/Column List.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'

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
  components: { GlobalHeader, ValidateInput, ValidateForm },
  setup () {
    const inputRef = ref<any>()
    const emailValue = ref('123@test.com')
    const pwdValue = ref('123')
    // 邮箱校验规则：
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空哟！' },
      { type: 'email', message: '请输入正确的邮箱格式' }
    ]
    // 密码校验规则：
    const pwdRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    // 监听子组件变化：
    const onFormSubmit = (result: boolean) => {
      console.log(inputRef.value.validateInput())
      console.log('=>>>>', result)
    }
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
    return { currentUser, emailRef, validateEmail, emailRules, emailValue, pwdRules, pwdValue, onFormSubmit, inputRef }
  }
})
</script>

<style lang="scss">
.form-text{
  color: red;
}
</style>
