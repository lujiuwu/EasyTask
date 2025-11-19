<template>
  <v-list>
    <v-list-item v-for="item in test" :key="item.id">
      <v-list-item-title>
        {{ item.type }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ item.itemId }}
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        {{ item.starAt }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
  const test = [
    {
      id: '1',
      type: 'milestone',
      itemId: '1',
      starAt: '2021-01-01',
    },
    {
      id: '2',
      type: 'milestone',
      itemId: '2',
      starAt: '2021-01-02',
    },
    {
      id: '3',
      type: 'milestone',
      itemId: '3',
      starAt: '2021-01-03',
    },
  ]
</script>
