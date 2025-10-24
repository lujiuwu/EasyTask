<template>
  <div>
    <h1>Account</h1>
    <div>username: {{ accountStore.username }}</div>
    <div>password: {{ accountStore.password }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { useAccountStore } from '@/stores/account'

  const accountStore = useAccountStore()

</script>
