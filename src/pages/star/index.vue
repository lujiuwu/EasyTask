<template>
  <v-container class="p-10px!">
    <v-sheet>
      <v-tabs v-model="tab" class="w-full flex" color="primary">
        <v-tab v-for="starTab in starTabs" :key="starTab.value" class="flex-1" :value="starTab.value">
          {{ starTab.label() }}
        </v-tab>
      </v-tabs>
    </v-sheet>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="tasks">
        <TaskStar />
      </v-tabs-window-item>
      <v-tabs-window-item value="milestones">
        <MilestoneStar />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>

<script lang="ts" setup>
  import MilestoneStar from './_components/milestoneStar.vue'
  import TaskStar from './_components/taskStar.vue'
  import { starTabs } from './constanst'
  useHeader({
    title: () => '收藏夹',
  })
  const tab = ref('tasks')
</script>

<style scoped>
</style>
