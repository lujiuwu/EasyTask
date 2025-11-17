<template>
  <v-bottom-navigation class="flex overflow-visible!" color="primary">
    <div
      v-for="item in navigationItems"
      :key="item.value"
      :class="[
        'flex-1 flex items-center justify-center',
        item.value === 'add' && isAddBtnActive() && 'add-btn',
      ]"
    >
      <v-btn
        v-if="!item.isSupBtn"
        :key="item.value"
        class="flex-1 h-54px!"
        :to="item.to"
        :value="item.value"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <span>{{ item.label }}</span>
      </v-btn>
      <div
        v-else
        class="color-[#1867C0] w-55px h-55px flex items-center justify-center rounded-full bg-[#DAE7F5] fixed bottom-15px"
        @click="() => {
          const currentRoute = route.path
          if(isDescendentOf('/add', currentRoute)) return
          modelValue = true
        }"
      >
        <v-icon size="30">{{ item.icon }}</v-icon>
      </div>
    </div>
  </v-bottom-navigation>
  <selection-sheet :items="items" :model-value="modelValue" @update:model-value="modelValue = $event" />
</template>

<script lang="ts" setup>
  import { isDescendentOf } from '@/utils/router'
  import SelectionSheet from './_components/SelectionSheet.vue'

  const route = useRoute()
  const items = [
    { label: '任务', to: '/tasks', icon: 'mdi-format-list-checks' },
    { label: '收藏夹', to: '/star', icon: 'mdi-star' },
    { label: '里程碑', to: '/milestones', icon: 'mdi-flag-checkered' },
    { label: '设置', to: '/setting', icon: 'mdi-cogs' },
  ]

  const modelValue = ref(false)
  const navigationItems = [
    { label: computed(() => t('footer-nav.tasks')), value: 'task', icon: 'mdi-format-list-checks', to: '/tasks' },
    { label: computed(() => t('footer-nav.star')), value: 'star', icon: 'mdi-star', to: '/star' },
    { value: 'add', icon: 'mdi-plus', to: '/add', isSupBtn: true },
    { label: computed(() => t('footer-nav.milestones')), value: 'milestone', icon: 'mdi-flag-checkered', to: '/milestones' },
    { label: computed(() => t('footer-nav.setting')), value: 'settings', icon: 'mdi-cogs', to: '/setting' },
  ]

  function isAddBtnActive () {
    return isDescendentOf('/add', route.path) || route.path === '/add'
  }
</script>
<style scoped lang="scss">
.add-btn {
  background: #DAE7F5;
}
</style>
