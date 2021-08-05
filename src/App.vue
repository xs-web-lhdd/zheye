<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/Column List.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '13422124234232',
    avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '13422124234232'
    // avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
  },
  {
    id: 3,
    title: 'test1的专栏',
    description: '13422124234232345555555555555555555555555555',
    avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: '13422124234232',
    avatar: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png'
  }
]

export default defineComponent({
  name: 'App',
  components: { ColumnList },
  setup () {
    return { list: testData }
  }
})
</script>

<style lang="scss">

</style>
