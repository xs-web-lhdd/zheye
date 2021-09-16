<template>
  <div class="droption-option" :class="{'is-disabled': disabled}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.is-disabled {
  display: block;
  // /* color: #6c757d !important; */
  pointer-events: none;
  background-color: #6c757d;
}
</style>
