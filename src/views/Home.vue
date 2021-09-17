<template>
  <section class="py-5 text-center container">
    <h1 v-if="loading">加载中......</h1>
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <img src="../assets/callout.svg" alt="callout" class="w-50"/>
        <h2 class="font-weight-light">随心写作，自由表达</h2>
        <p>
          <router-link to="/create" class="btn btn-primary my-2">开始写文章</router-link>
        </p>
      </div>
    </div>
  </section>
  <h4 class="font-weight-bold text-center">发现精彩</h4>
  <column-list :list="list"></column-list>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GlobalDateProps } from '../store/store'
import ColumnList from '../components/Column List.vue'

export default defineComponent({
  components: { ColumnList },
  setup () {
    const store = useStore<GlobalDateProps>()
    const list = computed(() => store.state.columns)
    const loading = computed(() => store.state.loading)
    onMounted(() => {
      store.dispatch('getColumn')
    })
    return { list, loading }
  }
})
</script>
