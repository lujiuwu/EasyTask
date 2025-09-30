<template>
  <v-toolbar
    class="fixed-toolbar"
    color="surface"
    :density="'comfortable'"
    :elevation="8"
  >
    <v-btn :disabled="!canGoBack" icon="mdi-arrow-left" @click="router.back()" />
    <v-toolbar-title class="text-h6">
      {{ currentRoute.meta.title }}
    </v-toolbar-title>
    <Filter v-if="currentRoute.path !== '/setting'" />
    <Layout v-if="currentRoute.path === '/tasks'" />
    <Share v-if="currentRoute.path === '/setting'" />
    <Col v-if="currentRoute.path === '/milestones'" />
  </v-toolbar>
</template>

<script lang="ts" setup>
  import _ from 'lodash'
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import router from '@/router'
  import { Col, Filter, Layout, Share } from './_components'

  const currentRoute = computed(() => router.currentRoute.value)
  console.log(currentRoute.value)

  const r = useRouter()
  const canGoBack = ref(false)
  function updateNavigationState () {
    canGoBack.value = window.history.state?.back
  }
  r.afterEach(() => {
    updateNavigationState()
  })

</script>

<style scoped>
.fixed-toolbar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}
</style>
