<template>
  <div class="validate-input-container pb-3">
    <input
      @blur="validateInput"
      :value="inputRef.val"
      :class="{'is-invalid': inputRef.error}"
      class="form-control"
      @input="updateValue"
      v-bind="$attrs"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
const emailValidate = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/

interface RuleProp {
  type: 'required' | 'email',
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '', // 添加默认值
      error: false,
      message: ''
    })
    // 实现双向绑定：
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    // 验证：
    const validateInput = () => {
      if (props.rules) {
        const addPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailValidate.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !addPassed
      }
    }
    return { inputRef, validateInput, updateValue }
  }
})
</script>
