<script setup lang="ts">
const { t } = useI18n()
const name = ref('')
function sayHi() {
  Message.success(`Hi, ${name.value}!`)
}
function warning() {
  Message.warning(t('warnMessage', [name.value]))
}
</script>

<template>
  <div>
    <div class="wrapper">
      <v-icon class="logo mb-4">$vitify</v-icon>
      <p class="mb-10">{{ t('description') }}</p>
      <v-text-field
        v-model="name"
        placeholder="Hello World"
        outlined
        :label="t('inputLabel')"
        class="input mx-auto"
      />
      <v-btn-toggle />
      <v-btn :disabled="!name" class="mr-2" color="primary" @click="sayHi">
        {{ t('confirm') }}
      </v-btn>
      <v-btn :disabled="!name" @click="warning">{{ t('cancel') }}</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  top: max(50vh - 300px, 0px);
  text-align: center;
  opacity: 0.9;
}
.logo {
  font-size: 10em;
  opacity: 0.2;
}
.input {
  width: 300px;
}
</style>

<route lang="json">
{
  "meta": {
    "title": "homepage",
    "icon": "mdi-home",
    "drawerIndex": 0
  }
}
</route>

<i18n lang="yaml">
en:
  description: Opinionated Admin Starter Template
  inputLabel: What's your name?
  warnMessage: How dare you refuse me, {0}!
zh:
  description: 固执己见的后台项目模板
  inputLabel: 你的名字?
  warnMessage: 你胆敢拒绝我, {0}!
</i18n>
