<script lang="ts">
export default defineComponent({
  data() {
    return { showGoTop: false }
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0)
    },
    onScroll() {
      this.showGoTop = scrollY > screen.height / 2
    },
  },
})
</script>

<template>
  <v-main>
    <v-slide-x-transition mode="out-in">
      <router-view />
    </v-slide-x-transition>
    <v-fab-transition>
      <v-btn
        v-show="showGoTop"
        v-scroll="onScroll"
        fixed
        dark
        fab
        right
        bottom
        elevation="12"
        color="primary"
        style="z-index: 3; bottom: 40px"
        @click="toTop"
      >
        <v-icon>$mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-main>
</template>
