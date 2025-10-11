<template>
  <v-dialog :model-value="props.open" @update:model-value="$emit('update:open', $event)">
    <v-card>
      <v-card-title>{{ t('pages.setting.user.function.switchLanguage.title') }}</v-card-title>
      <v-card-text>
        <v-select v-model="language" :items="languages" @update:model-value="language = $event" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :text="t('pages.setting.user.function.switchLanguage.confirm')"
          variant="outlined"
          @click="handleLanguage()"
        />
        <v-btn
          :text="t('pages.setting.user.function.switchLanguage.cancel')"
          variant="outlined"
          @click="emit('update:open', false)"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useI18n } from '@/composables/useI18n'

  const props = defineProps({
    open: {
      type: Boolean,
      default: false,
    },
  })
  const { switchLocale, t } = useI18n()
  const emit = defineEmits(['update:open'])
  const language = ref('en')
  const languages = ref([
    { title: t('language.ch'), value: 'ch' },
    { title: t('language.en'), value: 'en' },
  ])
  function handleLanguage () {
    emit('update:open', false)
    switchLocale(language.value)
  }
</script>
