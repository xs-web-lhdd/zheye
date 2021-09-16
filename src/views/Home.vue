<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <img src="../assets/callout.svg" alt="callout" class="w-50"/>
        <h2 class="font-weight-light">随心写作，自由表达</h2>
        <p>
          <a href="#" class="btn btn-primary my-2">开始写文章</a>
        </p>
      </div>
    </div>
  </section>
  <h4 class="font-weight-bold text-center">发现精彩</h4>
  <column-list :list="list"></column-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/Column List.vue'

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
  components: { ColumnList },
  setup () {
    return { list: testData }
  }
})
</script>
