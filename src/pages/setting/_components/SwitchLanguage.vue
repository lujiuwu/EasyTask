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
          variant="tonal"
          @click="handleLanguage()"
        />
        <v-btn
          :text="t('pages.setting.user.function.switchLanguage.cancel')"
          variant="tonal"
          @click="handleCancel()"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
  import { useToast } from 'vue-toastification'
  import { useAppStore } from '@/stores/app'

  const props = defineProps({
    open: {
      type: Boolean,
      default: false,
    },
  })
  const { switchLocale } = useI18n()
  const appStore = useAppStore()
  const emit = defineEmits(['update:open'])

  // 从 store 中获取当前语言设置
  const language = ref(appStore.locale)

  const languages = ref([
    { title: computed(() => t('language.ch')), value: 'ch' },
    { title: computed(() => t('language.en')), value: 'en' },
    { title: computed(() => t('language.ko')), value: 'ko' },
  ])

  // 监听 store 中的语言变化
  watch(() => appStore.locale, newLocale => {
    language.value = newLocale
  })
  const toast = useToast()
  function handleLanguage () {
    emit('update:open', false)
    switchLocale(language.value)
    toast.success(t('language.actions.success'))
  }

  function handleCancel () {
    emit('update:open', false)
    language.value = appStore.locale
  }
</script>
