<template>
  <div class="dropdown" ref="dropDownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from './useClickOutside'

export default defineComponent({
  naem: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // 获取ref节点：
    const dropDownRef = ref<null | HTMLElement>(null)
    // 点击其他区域隐藏：
    const isClickOutside = useClickOutside(dropDownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return { isOpen, toggleOpen, dropDownRef }
  }
})
</script>
