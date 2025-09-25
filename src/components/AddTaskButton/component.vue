<template>
  <v-btn class="btn" color="primary" icon="mdi-plus" @click="handleAddTask" />
</template>
<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function handleAddTask () {
    router.push('/tasks/add')
  }
</script>
<style lang="scss" scoped>
  .btn {
    position: fixed;
    bottom: 80px;
    right: 10px;
    font-weight: bold;
    z-index: 1000;
  }
</style>
