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
                <v-list-item-title>{{ t('pages.setting.user.function.switchLanguage.title') }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-list-subheader>{{ t('pages.setting.useful-functions.title') }}</v-list-subheader>
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
        <v-list-subheader>{{ t('pages.setting.other.title') }}</v-list-subheader>
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
  import { computed, ref } from 'vue'
  import { useI18n } from '@/composables/useI18n'
  import { SwitchLanguage } from './_components'

  const { t } = useI18n()

  const open = ref(false)
  function handleOpen () {
    open.value = !open.value
  }
  definePage({
    meta: { key: 'mdi-cogs', title: '设置' },
  })
  const useful_fns = [
    { label: computed(() => t('pages.setting.useful-functions.items.about-system')), icon: 'mdi-alert-circle', to: '/setting/system' },
    { label: computed(() => t('pages.setting.useful-functions.items.about-account')), icon: 'mdi-account', to: '/setting/account' },
    { label: computed(() => t('pages.setting.useful-functions.items.prefer-setting')), icon: 'mdi-heart', to: '/setting/prefer' },
  ]
  const other_fns = [
    { label: computed(() => t('pages.setting.other.items.other-functions')), icon: 'mdi-help-circle', to: '/setting/others' },
  ]
</script>
