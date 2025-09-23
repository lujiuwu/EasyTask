<template>
  <ToolBar />
  <v-main>
    <router-view />
  </v-main>
  <FooterBar />
</template>

<script lang="ts" setup>
  import { FooterBar, ToolBar } from '@/components'
</script>
