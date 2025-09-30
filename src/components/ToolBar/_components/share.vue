<template>
  <v-bottom-sheet>
    <template #activator="{ props: activatorProps }">
      <v-btn icon="mdi-share" v-bind="activatorProps" />
    </template>
    <v-card class="text-center">
      <v-card-title>
        <v-icon>mdi-minus</v-icon>
      </v-card-title>
      <v-card-text>
        <div>
          <v-btn
            v-for="item in shareItems"
            :key="item.label"
            :prepend-icon="item.icon"
            stacked
            variant="text"
          >
            {{ item.label }}
          </v-btn>
        </div>
        <v-divider class="mt-10px" />
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script lang="ts" setup>
  const shareItems = [
    { label: '微信', icon: 'mdi-wechat' },
    { label: 'QQ', icon: 'mdi-qqchat' },
    { label: '微博', icon: 'mdi-sina-weibo' },
    { label: 'facebook', icon: 'mdi-facebook' },
  ]
</script>
<style scoped>
.v-card-item .v-card-item__prepend {
  text-align: center;
  width: 100%;
}
</style>
