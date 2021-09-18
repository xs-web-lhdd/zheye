<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <img src="../assets/callout.svg" alt="callout" class="w-50"/>
        <h2 class="font-weight-light">随心写作，自由表达</h2>
        <Upload :beforeUpload="beforeUpload" @file-uploaded="onFileUploaded" @file-uploaded-error="onFileUploadedError" action="https://www.liang666.oss-cn-beijing.aliyuncs.com">
          <h2>点击上传</h2>
          <template #loading>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading......</span>
            </div>
          </template>
        </Upload>
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
import Upload from '../components/UpLoad/UpLoad.vue'

export default defineComponent({
  components: { ColumnList, Upload },
  setup () {
    const store = useStore<GlobalDateProps>()
    const list = computed(() => store.state.columns)
    const beforeUpload = (file: File) => {
      const isJpg = file.type === 'image/jpeg'
      if (!isJpg) {
        alert('请上传JPG文件')
        return false
      }
      return true
    }
    // 上传成功：
    const onFileUploaded = (rawData: any) => {
      alert(`上传图片id：${rawData.data}`)
    }
    // 上传失败：
    const onFileUploadedError = (rawData: any) => {
      alert(`上传失败：${rawData}`)
    }
    onMounted(() => {
      store.dispatch('getColumn')
    })
    return { list, beforeUpload, onFileUploaded, onFileUploadedError }
  }
})
</script>
