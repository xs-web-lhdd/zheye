<template>
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
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

const emailValidate = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
export default defineComponent({
  name: 'App',
  components: { ValidateInput, ValidateForm },
  setup () {
    const inputRef = ref<any>()
    const emailValue = ref('')
    const pwdValue = ref('')
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
      console.log('result=>>>', result)
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
    return { emailRef, validateEmail, emailRules, emailValue, pwdRules, pwdValue, onFormSubmit, inputRef }
  }
})
</script>
