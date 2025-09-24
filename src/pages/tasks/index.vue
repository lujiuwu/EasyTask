<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col class="p-0" cols="12">
            <v-text-field
              v-model="value"
              clearable
              placeholder="搜索任务"
              prepend-inner-icon="mdi-magnify"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <data-list />
    <add-task-button />
  </div>
</template>

<script lang="ts" setup>
  import { AddTaskButton } from '@/components/AddTaskButton'
  import { DataList } from '@/components/DataList'
  definePage({
    meta: { key: 'mdi-format-list-checks', title: '任务' },
  })
  const value = ref('')
</script>
<style lang="scss" scoped>
  .v-col {
    padding: 0 !important;
  }
</style>
