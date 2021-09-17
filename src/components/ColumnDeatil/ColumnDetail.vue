<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDateProps } from '../../store/store'
import PostList from '../PostList/PostList.vue'
export default defineComponent({
  components: { PostList },
  setup () {
    const store = useStore<GlobalDateProps>()
    const route = useRoute()
    const currentId = +route.params.id // 字符变 number
    const column = computed(() => store.getters.getColumnById({ currentId }))
    const list = computed(() => store.getters.getPostByCId(currentId))
    return { column, list }
  }
})
</script>
