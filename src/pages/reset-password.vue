<script setup lang="ts">
import { resetPassword } from '@/api/users'
import type { VForm } from '@/utils/types'

const { t } = useI18n()
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
  (v: string) => !!v || t('pleaseEnter', [t('password')]),
  (v: string) =>
    v.length <= 20 ||
    t('form.LTE', { input: t('lengthOf', [t('password')]), limit: 20 }),
  (v: string) =>
    v.length >= 5 ||
    t('form.GTE', { input: t('lengthOf', [t('password')]), limit: 5 }),
]
const confirmedRules = computed(() => [
  ...rules,
  password.value === confirm.value || t('notEqualErr'),
])
const form = ref<VForm | null>(null)
async function submit() {
  if (form.value!.validate()) {
    try {
      await resetPassword(password.value, current.value)
      Message.success(t('passwordUpdated'))
      userStore.logOut()
      router.push({ name: 'login' }).catch()
    } catch (e) {
      Message.error(e)
    }
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
        >
          <template #heading>
            <v-icon>$mdi-key-variant</v-icon>
            {{ t('resetPassword') }}
          </template>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="current"
                :label="t('currentPassword')"
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
                :label="t('newPassword')"
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
                :label="t('confirmPassword')"
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
              {{ t('submit') }}
            </v-btn>
          </template>
        </v-head-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<i18n lang="json">
{
  "en": {
    "passwordUpdated": "Password Updated",
    "currentPassword": "Current Password",
    "confirmPassword": "Confirm Password",
    "newPassword": "New Password",
    "notEqualErr": "Must be the same as New Password"
  },
  "zh": {
    "passwordUpdated": "密码已更新",
    "currentPassword": "当前密码",
    "confirmPassword": "确认密码",
    "newPassword": "新密码",
    "notEqualErr": "与新密码不匹配，请重新输入"
  }
}
</i18n>
