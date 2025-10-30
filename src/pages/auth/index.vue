<template>
  <div class="auth-container pt-30%">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" lg="4" md="6" sm="8">
          <v-card class="auth-card" elevation="8">
            <v-card-title class="text-center pa-6">
              <h2 class="text-h4 font-weight-bold">
                {{ t('login.login') }}
              </h2>
            </v-card-title>
            <v-card-text class="pa-6">
              <v-form>
                <v-text-field
                  v-model="username"
                  class="mb-4"
                  clearable
                  :error-messages="errors.username"
                  :label="t('login.username.label')"
                  :placeholder="t('login.username.placeholder')"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  v-bind="usernameProps"
                />
                <div class="text-subtitle-1 mb-5px d-flex align-center justify-space-between">
                  <a
                    class="text-caption text-decoration-none text-#283593"
                  >
                    {{ t('login.forgot-password') }}
                  </a>
                </div>
                <v-text-field
                  v-model="password"
                  class="mb-4"
                  :error-messages="errors.password"
                  :label="t('login.password.label')"
                  :placeholder="t('login.password.placeholder')"
                  prepend-inner-icon="mdi-lock"
                  :type="visible ? 'text' : 'password'"
                  variant="outlined"
                  v-bind="passwordProps"
                >
                  <template #append-inner>
                    <v-icon
                      :icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      @click="visible = !visible"
                    />
                  </template>
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="pa-6 pt-0">
              <v-btn
                block
                color="purple"
                :disabled="!meta.valid"
                size="large"
                variant="tonal"
                @click="handleLogin"
              >
                {{ t('login.login') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
  import { useMutation } from '@tanstack/vue-query'
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import { useI18n } from 'vue-i18n'
  import { useToast } from 'vue-toastification'
  import { z } from 'zod'
  import { useAuth } from '@/composables/useAuth'
  import httpClient from '@/utils/http'

  const toast = useToast()
  const { setAuth } = useAuth()
  const router = useRouter()
  const { t: tFn } = useI18n()
  const visible = ref(false)
  const schema = z.object({
    username: z.string()
      .min(3, t('login.username.errors.min', { min: 3 }))
      .max(20, t('login.username.errors.max', { max: 20 }))
      .regex(/^[a-zA-Z0-9_]+$/, t('login.username.errors.regex', { regex: '^[a-zA-Z0-9_]+$' })),
    password: z.string()
      .min(6, t('login.password.errors.min', { min: 6 }))
      .max(20, t('login.password.errors.max', { max: 20 })),
  })

  const { defineField, errors, meta } = useForm({
    validationSchema: toTypedSchema(schema),
    initialValues: {
      username: '',
      password: '',
    },
  })

  const [username, usernameProps] = defineField('username')
  const [password, passwordProps] = defineField('password')

  const { mutate: LoginFn } = useMutation({
    mutationFn: (formData: { username: string, password: string }) => {
      return httpClient.post('/auth/login', formData)
    },
    onSuccess: response => {
      // 设置认证信息 - token在data.data中
      if (response.data.data && response.data.data.token) {
        setAuth(response.data.data.token)
        toast.success(tFn('login.login-success'))
        router.push('/tasks')
      } else {
        toast.error('登录响应中缺少token')
      }
    },
    onError: error => {
      console.log('请重新登录，错误原因：', error)
      toast.error((error as any).response.data.message)
    },
  })

  async function handleLogin () {
    if (meta.value.valid) {
      const formData = {
        username: username.value!,
        password: password.value!,
      }
      LoginFn(formData)
    }
  }

</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.auth-card {
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}

.auth-card .v-card-title h2 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
