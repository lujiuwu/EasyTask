<template>
  <v-btn class="mt-10px" color="primary" variant="flat">
    {{ t('pages.tasks.item.detail.add-sub-task') }}
  </v-btn>
</template>

<script lang="ts" setup>
  import { useI18n } from '@/composables/useI18n'
  const { t } = useI18n()

</script>
