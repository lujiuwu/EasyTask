<template>
  <v-toolbar
    class="fixed-toolbar"
    color="surface"
    :density="'comfortable'"
    :elevation="2"
  >
    <template #prepend>
      <v-btn v-if="route.path !== '/tasks'" icon="mdi-arrow-left" @click="handleBack()" />
    </template>
    <template #title>
      <component :is="renderHeader.title" />
    </template>
    <template #append>
      <Filter v-if="renderHeader.options.includes(ToolBarOptions.FILTER)" />
      <Layout v-if="renderHeader.options.includes(ToolBarOptions.LAYOUT)" />
      <Share v-if="renderHeader.options.includes(ToolBarOptions.SHARE)" />
      <Col v-if="renderHeader.options.includes(ToolBarOptions.COL)" />
      <Sort v-if="renderHeader.options.includes(ToolBarOptions.SORT)" />
    </template>
  </v-toolbar>
</template>

<script lang="ts" setup>
  import _ from 'lodash'
  import { renderHeader } from '@/composables/useHeader'
  import { ToolBarOptions } from '@/enum/layout'
  import { isDescendentOf } from '@/utils/router'
  import { Col, Filter, Layout, Share, Sort } from './_components'

  const router = useRouter()
  const route = useRoute()

  function handleBack () {
    // add 具有特殊行为
    if (isDescendentOf('/add', route.path)) router.push('/add')
    else router.back()
  }
</script>

<style scoped>
.fixed-toolbar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 50px;
}
</style>
