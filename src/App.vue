<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: 'liang'
}
export default defineComponent({
  name: 'App',
  components: { GlobalHeader },
  setup () {
    return { currentUser }
  }
})
</script>

<style lang="scss">
.form-text{
  color: red;
}
</style>
