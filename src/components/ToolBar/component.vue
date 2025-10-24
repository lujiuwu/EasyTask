<template>
  <v-toolbar
    class="fixed-toolbar"
    color="surface"
    :density="'comfortable'"
    :elevation="8"
  >
    <v-btn icon="mdi-arrow-left" @click="router.back()" />
    <template #title>
      <component :is="renderHeader.title" />
    </template>
    <Filter v-if="currentRoute.path === '/tasks'" />
    <Layout v-if="currentRoute.path === '/tasks'" />
    <Share v-if="currentRoute.path === '/setting'" />
    <Col v-if="currentRoute.path === '/milestones'" />
    <Sort v-if="currentRoute.path === '/tasks'" />
  </v-toolbar>
</template>

<script lang="ts" setup>
  import _ from 'lodash'
  import { renderHeader } from '@/composables/useHeader'
  import { useI18n } from '@/composables/useI18n'
  import { Col, Filter, Layout, Share, Sort } from './_components'

  const currentRoute = computed(() => router.currentRoute.value)
  const { t } = useI18n()
  const router = useRouter()
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
