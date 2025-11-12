<template>
  <v-form>
    <v-container class="relative py-2px px-5px">
      <v-row>
        <v-col class="p-0! max-h-56px overflow-hidden" cols="12">
          <v-text-field
            v-model="value"
            clearable
            :placeholder="t('pages.tasks.search.tasks')"
            prepend-inner-icon="mdi-magnify"
            @click="() => {
              if (list.length > 0) {
                showSearchResModal = true
              }
            }"
            @update:model-value="handleSearch"
          />
        </v-col>
      </v-row>
      <v-row
        v-show="showSearchResModal"
        ref="searchResModal"
        class="absolute top-12 left-[10px] w-full z-10"
      >
        <v-col cols="12 p-0!">
          <v-list class="max-h-[300px] overflow-y-auto border-b-md">
            <v-list-item
              v-for="item in list"
              :key="item.id"
              :to="`/tasks/${item.id}`"
            >
              <v-list-item-title>
                <text-highlight :highlight-range="[item.indices[0]!, item.indices[1]!]" :text="item.label" />
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script lang="ts" setup>
  import type { SearchedItem } from '../util'
  import { onClickOutside, useDebounceFn } from '@vueuse/core'
  import _ from 'lodash'
  import { useTemplateRef } from 'vue'
  import { useSearch } from '@/composables/useSearch'
  import { useTasksCache } from '@/composables/useTasksCache'
  import { formatTasksList } from '../util'
  import TextHighlight from './TextHighlight.vue'

  const showSearchResModal = ref(false)
  const list = ref<SearchedItem[]>([])
  const value = ref('')

  const { getCachedTasks } = useTasksCache()
  const handleSearch = useDebounceFn(() => {
    const cachedData = getCachedTasks() as any
    const currentTasks = _.flatMap((cachedData.pages as any[]), (page: any) => page.data)
    if (value.value === '') {
      list.value = []
      return
    }
    const keys = [
      'title',
      'content.text',
    ]
    list.value = formatTasksList(useSearch(currentTasks, value.value, keys))
    showSearchResModal.value = list.value.length > 0
  }, 300)

  const modalRef = useTemplateRef<HTMLElement>('searchResModal')

  onClickOutside(modalRef, () => showSearchResModal.value = false)
</script>
