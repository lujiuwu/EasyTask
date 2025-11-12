<template>
  <v-dialog :model-value="props.open" @update:model-value="updateOpen">
    <v-card>
      <v-card-title>
        {{ t(`pages.tasks.item.actions.${props.type}`) }}
      </v-card-title>
      <v-card-text class="pt-0!">
        <v-form>
          <v-text-field v-show="props.type === TaskActionModalType.FINISH" v-model="formValues.finishTime" label="完成时间" />
          <v-text-field v-show="props.type === TaskActionModalType.FINISH" v-model="formValues.remark" label="备注" />
          <v-text-field v-show="props.type === TaskActionModalType.EDIT" v-model="formValues.text" label="任务名称" />
          <div v-show="props.type === TaskActionModalType.DELETE">
            {{ t('pages.tasks.item.delete.title') }}
          </div>
          <div v-show="props.type === TaskActionModalType.DELETE" class="mb-10px">
            {{ t('pages.tasks.item.delete.content') }}
          </div>
          <v-btn class="mr-2" color="primary" variant="tonal" @click="handleConfirm">{{ t('pages.tasks.item.actions.confirm') }}</v-btn>
          <v-btn color="error" variant="tonal" @click="handleCancel">{{ t('pages.tasks.item.actions.cancel') }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
  import { TaskActionModalType } from '../constants'

  const { t } = useI18n()
  const props = defineProps({
    open: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<TaskActionModalType>,
      required: true,
    },
  })
  const emit = defineEmits(['update:open'])
  function updateOpen (value: boolean) {
    emit('update:open', value)
  }

  const formValues = ref({
    finishTime: '',
    remark: '',
    text: '',
  })

  function handleConfirm () {
    console.log(formValues.value)
  }

  function handleCancel () {
    updateOpen(false)
  }
</script>
