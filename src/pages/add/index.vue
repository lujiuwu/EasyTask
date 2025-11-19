<template>
  <v-container>
    <v-card>
      <v-card-title>添加</v-card-title>
      <v-card-text>
        <div class="grid grid-cols-2 gap-10px">
          <div v-for="item in items" :key="item.to" class="selection-item" @click="handleClick(item)">
            <v-icon class="mr-10px">{{ item.icon }}</v-icon>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
  import router from '@/router'

  useHeader({
    title: () => '添加',
  })
  const items = [
    { label: '任务', to: '/tasks', icon: 'mdi-format-list-checks' },
    { label: '里程碑', to: '/milestones', icon: 'mdi-flag-checkered' },
  ]
  function handleClick (item: { to: string }) {
    router.push('/add' + item.to)
  }
</script>
<style scoped lang="scss">
.selection-item {
  height: 80px;
  display: flex;
  padding-left: 10px;
  font-size: 18px;
  color: #fff;
  align-items: center;
  background: #555555;
  border-radius: 5px;
}
</style>
