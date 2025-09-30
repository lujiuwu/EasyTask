<template>
  <v-list-item>
    <v-list-item-title>
      {{ props.data.title }}
    </v-list-item-title>
    <v-list-item-subtitle>
      <span> 编号{{ props.data.id }}</span>
      <span> 创建时间{{ props.data.createTime }}</span>
    </v-list-item-subtitle>
  </v-list-item>
</template>

<script lang="ts" setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })
</script>

<style scoped>
</style>
