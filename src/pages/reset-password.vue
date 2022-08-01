<script setup lang="ts">
import { selfResetPassword } from '@/api/users'
import type { VForm } from '@/utils/types'

const router = useRouter()
const userStore = useUserStore()
const showCurrent = ref(false)
const showNew = ref(false)
const showConfirm = ref(false)
const confirm = ref('')
const password = ref('')
const current = ref('')
const valid = ref(true)
const rules = [
  (v: string) => !!v || '请填写密码',
  (v: string) => v.length <= 20 || '密码长度必须小于等于20个字符',
  (v: string) => v.length >= 5 || '密码长度必须大于等于5个字符',
]
const confirmedRules = computed(() => [
  ...rules,
  password.value === confirm.value || '与新密码不匹配，请重新输入',
])
const form = ref<VForm | null>(null)
async function submit() {
  if (form.value!.validate()) {
    await selfResetPassword(userStore.name, current.value, password.value)
    Message.success('密码已更新')
    await userStore.logOut()
    router.push({ name: 'login' })
  }
}
</script>

<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12">
        <v-head-card
          class="mx-auto"
          style="max-width: 350px; position: relative; top: -100px"
          title="重设密码"
        >
          <template #heading>
            <v-icon>$mdi-key-variant</v-icon>
            重设密码
          </template>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="current"
                label="当前密码"
                :counter="20"
                :append-icon="showCurrent ? '$mdi-eye' : '$mdi-eye-off'"
                :type="showCurrent ? 'text' : 'password'"
                required
                :rules="rules"
                autocomplete="current-password"
                @click:append="showCurrent = !showCurrent"
              />
              <v-text-field
                v-model="password"
                label="新密码"
                :counter="20"
                :append-icon="showNew ? '$mdi-eye' : '$mdi-eye-off'"
                :type="showNew ? 'text' : 'password'"
                :rules="rules"
                autocomplete="off"
                required
                @click:append="showNew = !showNew"
              />
              <v-text-field
                v-model="confirm"
                label="确认密码"
                :counter="20"
                :append-icon="showConfirm ? '$mdi-eye' : '$mdi-eye-off'"
                :type="showConfirm ? 'text' : 'password'"
                :rules="confirmedRules"
                autocomplete="off"
                required
                @click:append="showConfirm = !showConfirm"
              />
            </v-form>
          </v-container>
          <template #actions>
            <v-spacer />
            <v-btn color="primary" :disabled="!valid" @click="submit">
              提交
            </v-btn>
          </template>
        </v-head-card>
      </v-col>
    </v-row>
  </v-container>
</template>
