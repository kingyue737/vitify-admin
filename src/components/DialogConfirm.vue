<script lang="ts">
export default defineComponent({
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data: () => ({
    dialog: false,
    confirmed: false,
    resolve: (confirmed: boolean) => {},
    reject: (val: unknown) => {},
    message: '',
  }),
  watch: {
    dialog(value) {
      if (value === false) {
        this.resolve(this.confirmed)
      }
    },
  },
  methods: {
    open(message: string) {
      this.confirmed = false
      this.dialog = true
      this.message = message
      return new Promise<boolean>((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    confirm() {
      this.confirmed = true
      this.dialog = false
    },
    cancel() {
      this.confirmed = false
      this.dialog = false
    },
  },
})
</script>

<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card style="z-index: -1">
      <v-card-title class="font-weight-bold d-flex justify-center">
        <v-icon class="mr-2" color="warning">$warning</v-icon>
        <span style="line-height: 24px">{{ message }}</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary darken-1" text @click="cancel">{{
          t('cancel')
        }}</v-btn>
        <v-btn color="primary darken-1" text @click="confirm">{{
          t('confirm')
        }}</v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
