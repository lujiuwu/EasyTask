<template>
  <v-dialog :model-value="props.open" @update:model-value="$emit('update:open', $event)">
    <v-card>
      <v-card-title>切换语言</v-card-title>
      <v-card-text>
        <v-select v-model="language" :items="languages" @update:model-value="handleLanguage" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :text="t('close')"
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
  const emit = defineEmits(['update:open'])
  const language = ref('en')
  const languages = ref(['ch', 'en'])
  const { switchLocale, t } = useI18n()

  function handleLanguage (value: string) {
    language.value = value
    emit('update:open', false)
    switchLocale(value)
  }
</script>
