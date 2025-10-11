<template>
  <div class="p-20px">
    <v-list>
      <v-list-item
        prepend-avatar="https://p.sda1.dev/27/c5845af66375176df88f9c56704bbed4/bb.png"
        subtitle="admin@admin.com"
        title="admin"
      >
        <template #append>
          <v-menu>
            <template #activator="{ props: activatorProps }">
              <v-btn
                icon="mdi-menu-down"
                size="small"
                variant="text"
                v-bind="activatorProps"
              />
            </template>
            <v-list>
              <v-list-item @click="handleOpen">
                <v-list-item-title>切换语言</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-list-subheader>常用功能</v-list-subheader>
        <v-list-item v-for="item in useful_fns" :key="item.label" color="primary" :to="item.to">
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title>
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-subheader>其他</v-list-subheader>
        <v-list-item v-for="item in other_fns" :key="item.label" color="primary" :to="item.to">
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title>
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-list>
    <SwitchLanguage :open="open" @update:open="handleOpen" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { SwitchLanguage } from './_components'

  const open = ref(false)
  function handleOpen () {
    open.value = !open.value
  }
  definePage({
    meta: { key: 'mdi-cogs', title: '设置' },
  })
  const useful_fns = [
    { label: '关于系统', icon: 'mdi-alert-circle', to: '/setting/system' },
    { label: '关于账户', icon: 'mdi-account', to: '/setting/account' },
    { label: '偏好设置', icon: 'mdi-heart', to: '/setting/prefer' },
  ]
  const other_fns = [
    { label: '其他功能', icon: 'mdi-help-circle', to: '/setting/others' },
  ]
</script>
