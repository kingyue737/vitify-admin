<script setup lang="ts">
import type { VForm } from '@/utils/types'
import background from '@/assets/images/drawer/1.jpg'
import ButtonLocale from '@/components/layout/ButtonLocale.vue'
const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const form = ref<VForm | null>(null)
const loginShowed = ref(false)
const username = ref('')
const password = ref('')
const waiting = ref(false)
const showPassword = ref(false)
const valid = ref(true)
const snackbar = ref(false)
const snackMessage = ref('')
const timeout = ref(3000)
const nameRules = [
  (v: string) => !!v || t('pleaseEnter', [t('username')]),
  (v: string) =>
    v.length <= 15 ||
    t('form.LTE', { input: t('lengthOf', [t('username')]), limit: 15 }),
]
const passwordRules = [(v: string) => !!v || t('pleaseEnter', [t('password')])]
onMounted(() => {
  loginShowed.value = true
})
async function onSubmit() {
  if (form.value?.validate()) {
    try {
      waiting.value = true
      await userStore.login(username.value, password.value)
      await router.push({ path: '/' }).catch(() => {})
    } catch (e) {
      snackMessage.value = JSON.stringify(e)
      snackbar.value = true
    } finally {
      waiting.value = false
    }
  }
}
</script>

<template>
  <v-main>
    <v-img
      :src="background"
      gradient="to top, rgba(0,0,0,.5), rgba(0,0,0,.5)"
      style="min-height: 100vh; height: 100vh"
    >
      <v-app-bar color="transparent" flat absolute dark>
        <v-img
          class="mx-2"
          src="/favicon.svg"
          max-height="40"
          max-width="40"
          contain
        ></v-img>
        <v-app-bar-title class="font-weight-bold">
          Vitify <span class="primary--text text--lighten-1">Admin</span>
        </v-app-bar-title>
        <v-spacer />
        <v-tooltip bottom>
          <template #activator="{ on }">
            <v-btn
              dark
              text
              min-width="0"
              href="https://kingyue737.github.io/vitify-docs/"
              target="_blank"
              v-on="on"
            >
              <v-icon>$mdi-book-outline</v-icon>
            </v-btn>
          </template>
          <span>{{ t('documentation') }}</span>
        </v-tooltip>
        <ButtonLocale />
      </v-app-bar>
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-head-card light class="px-5 py-3 mx-auto login-card mt-0">
              <template #heading>
                <v-icon>$mdi-login</v-icon>
                {{ t('userLogin') }}
              </template>
              <v-expand-transition>
                <v-row v-show="loginShowed" align="center" justify="center">
                  <v-col>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model.trim="username"
                        :counter="15"
                        :rules="nameRules"
                        :label="t('username')"
                        prepend-icon="$mdi-account-outline"
                        required
                        @keydown.enter.prevent="onSubmit"
                      />
                      <v-text-field
                        v-model="password"
                        prepend-icon="$mdi-lock-outline"
                        :append-icon="
                          showPassword ? '$mdi-eye' : '$mdi-eye-off'
                        "
                        :type="showPassword ? 'text' : 'password'"
                        :rules="passwordRules"
                        :label="t('password')"
                        required
                        autocomplete="on"
                        @click:append="showPassword = !showPassword"
                        @keydown.enter.prevent="onSubmit"
                      />
                    </v-form>
                  </v-col>
                </v-row>
              </v-expand-transition>
              <template #actions>
                <v-btn
                  id="login-btn"
                  color="primary mx-auto"
                  block
                  :disabled="waiting || !valid"
                  :loading="waiting"
                  @click="onSubmit"
                >
                  {{ t('login') }}
                </v-btn>
              </template>
            </v-head-card>
          </v-col>
        </v-row>
      </v-container>
      <v-footer absolute color="transparent" dark>
        <v-col class="text-center" cols="12">
          &copy; Copyright 2022
          <a href="https://github.com/kingyue737" target="blank">Yue JIN</a>
          <span> & </span>
          <a href="http://www.nustarnuclear.com/" target="blank"
            ><v-icon class="mt-n1">$nustar</v-icon>NuStar Nuclear</a
          >
        </v-col>
      </v-footer>
    </v-img>
    <v-snackbar v-model="snackbar" color="error" :timeout="timeout">
      {{ snackMessage }}
      <template #action="{ attrs }">
        <v-btn icon small v-bind="attrs" class="ml-4" @click="snackbar = false">
          <v-icon>$cancel</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<style lang="scss" scoped>
.v-app-bar-title {
  :deep(.v-app-bar-title__content) {
    text-overflow: clip !important;
  }
}
.login-card {
  max-width: 300px;
  background-color: rgba(255, 255, 255, 0.85) !important;
  :deep(.v-head-card__heading) {
    width: 100%;
    margin-bottom: -12px !important;
    padding: 24px !important;
  }
}
a {
  color: inherit !important;
}
</style>

<route lang="yaml">
meta:
  layout: empty
</route>
