<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <Loader text="拼命加载中" background="rgba(0, 0, 0, .1)" v-if="loading"></Loader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2021 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDateProps } from './store/store'
import GlobalHeader from './components/GlobalHeader.vue'
import Loader from './components/Loading/Loading.vue'

export default defineComponent({
  name: 'App',
  components: { GlobalHeader, Loader },
  setup () {
    const store = useStore<GlobalDateProps>()
    const currentUser = computed(() => store.state.user)
    const loading = computed(() => store.state.loading)
    return { currentUser, loading }
  }
})
</script>

<style lang="scss">
.form-text{
  color: red;
}
</style>
