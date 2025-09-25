<template>
  <div class="p-10px">
    <v-card>
      <v-list-item class="sticky-title">
        <template #title>
          <h2>添加任务</h2>
        </template>
        <template #append>
          <v-btn>
            提交
          </v-btn>
        </template>
      </v-list-item>
      <v-divider />
      <v-card-text>
        <AddForm />
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import AddForm from './_components/addForm.vue'
</script>

<style lang="scss" scoped>
.sticky-title {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
