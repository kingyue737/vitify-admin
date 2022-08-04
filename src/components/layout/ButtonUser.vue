<script setup lang="ts">
const router = useRouter()
const userStore = useUserStore()
const { name } = storeToRefs(userStore)
const logOut = async () => {
  await userStore.logOut()
  router.push('/login')
}
</script>
<template>
  <v-menu bottom left offset-y origin="top right" transition="scale-transition">
    <template #activator="{ attrs, on: menu }">
      <v-tooltip bottom>
        <template #activator="{ on: toolTip }">
          <v-btn
            min-width="0"
            text
            v-bind="attrs"
            v-on="{ ...toolTip, ...menu }"
          >
            <v-icon>$mdi-account</v-icon>
          </v-btn>
        </template>
        <span>{{ name }}</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item @click="router.push({ name: 'reset-password' })">
        <v-list-item-icon class="mr-2">
          <v-icon> $mdi-key-variant </v-icon>
        </v-list-item-icon>
        <v-list-item-title link> 重置密码 </v-list-item-title>
      </v-list-item>
      <v-list-item @click="logOut">
        <v-list-item-icon class="mr-2">
          <v-icon> $mdi-logout </v-icon>
        </v-list-item-icon>
        <v-list-item-title link> 注销 </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
