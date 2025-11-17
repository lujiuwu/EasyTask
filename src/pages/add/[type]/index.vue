<template>
  <v-container>
    {{ type }}
  </v-container>
</template>
<script lang="ts" setup>
  const type = useRoute().params.type as string
  useHeader({
    title: () => type,
  })
</script>
