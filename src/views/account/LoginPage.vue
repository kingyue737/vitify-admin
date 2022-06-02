<script lang="ts">
import type { VForm } from '@/utils/types'
import Axios from 'axios'

export default defineComponent({
  name: 'LoginPage',
  data: () => ({
    loginShowed: false,
    username: 'admin',
    password: 'admin',
    waiting: false,
    showPassword: false,
    valid: true,
    snackbar: false,
    snackMessage: '',
    timeout: 3000,
    nameRules: [
      (v: string) => !!v || '请填写用户名',
      (v: string) => v.length <= 15 || '用户名必须小于等于15个字符',
    ],
    passwordRules: [(v: string) => !!v || '请填写密码'],
  }),
  mounted() {
    this.loginShowed = true
  },
  methods: {
    async onSubmit() {
      if ((this.$refs.form as VForm).validate()) {
        try {
          this.waiting = true
          const loginForm = {
            username: this.username,
            password: this.password,
          }
          await useUserStore().login(loginForm)
          await this.$router.push({ path: '/' }).catch(() => {})
        } catch (e) {
          if (Axios.isAxiosError(e)) {
            if (e.response?.status === 401) {
              this.snackMessage = '用户名或密码错误'
              this.snackbar = true
            }
          } else {
            throw e
          }
        } finally {
          this.waiting = false
        }
      }
    },
  },
})
</script>

<template>
  <v-main>
    <v-img
      src="src/assets/images/drawer/1.jpg"
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
          核星科技<span class="primary--text">NuStar</span>前端框架
        </v-app-bar-title>
      </v-app-bar>
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-head-card light class="px-5 py-3 mx-auto login-card mt-0">
              <template #heading>
                <v-icon>$mdi-login</v-icon>
                用户登录
              </template>
              <v-expand-transition>
                <v-row v-show="loginShowed" align="center" justify="center">
                  <v-col>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model="username"
                        :counter="15"
                        :rules="nameRules"
                        label="用户名"
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
                        label="密码"
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
                  登录
                </v-btn>
              </template>
            </v-head-card>
          </v-col>
        </v-row>
      </v-container>
      <v-footer absolute color="transparent" dark>
        <v-col class="text-center" cols="12">
          &copy; Copyright 2021
          <a href="http://www.nustarnuclear.com/" target="blank"
            ><v-icon>$nustar</v-icon>NuStar</a
          >
          All Right Reserved
        </v-col>
      </v-footer>
    </v-img>
    <v-snackbar v-model="snackbar" color="error" :timeout="timeout">
      {{ snackMessage }}
      <template #action="{ attrs }">
        <v-btn icon small v-bind="attrs" class="ml-4" @click="snackbar = false">
          <v-icon>$vuetify.icons.cancel</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<style lang="scss" scoped>
.login-card {
  max-width: 300px;
  background-color: rgba(255, 255, 255, 0.85) !important;
  ::v-deep .v-head-card__heading {
    width: 100%;
    margin-bottom: -12px !important;
    padding: 24px !important;
  }
}
a {
  color: inherit !important;
}
</style>
