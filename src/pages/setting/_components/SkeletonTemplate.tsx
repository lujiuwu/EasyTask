import { defineComponent } from 'vue'

export const SkeletonTemplate = defineComponent({
  setup () {
    return () => (
      <v-card class="w-full" style="min-height: 400px;">
        <v-card-title>
          template title
        </v-card-title>
      </v-card>
    )
  },
})
