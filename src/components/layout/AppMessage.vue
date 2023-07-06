<script setup lang="ts">
import AppMessageItem from './AppMessageItem.vue'
import { formatTime } from '@/utils/date'

const { t } = useI18n()
const messageStore = useMessageStore()
const { messages } = storeToRefs(messageStore)
const messagesShown = computed(() =>
  messages.value.filter((message) => message.show).reverse(),
)
const showAll = ref(false)
const timeout = ref(5000)
function deleteMessage(id: number) {
  messageStore.delMessage(id)
}
function emptyMessages() {
  messageStore.$reset()
}
function toggleAll() {
  showAll.value = !showAll.value
  messages.value.forEach((m) => {
    m.show = showAll.value
  })
  if (showAll.value) {
    timeout.value = -1
  } else {
    timeout.value = 5000
  }
}
</script>

<template>
  <div class="d-contents">
    <v-tooltip top>
      <template #activator="{ on }">
        <v-btn text tile small @click="toggleAll" v-on="on">
          <v-icon>{{
            messages.length ? 'mdi-bell-badge-outline' : 'mdi-bell-outline'
          }}</v-icon>
        </v-btn>
      </template>
      <span>{{ t('notification') }}</span>
    </v-tooltip>
    <Portal to="app">
      <v-card
        elevation="6"
        width="400"
        class="d-flex flex-column message-card"
        :class="{ 'message-card--open': showAll }"
      >
        <v-toolbar flat dense>
          <v-toolbar-title class="font-weight-light text-body-1">{{
            t(messages.length ? 'notification' : 'noNew')
          }}</v-toolbar-title>
          <v-spacer />
          <v-btn small icon :title="t('clearAll')" @click="emptyMessages">
            <v-icon>mdi-bell-remove</v-icon>
          </v-btn>
          <v-btn small icon :title="t('hide')" @click="toggleAll">
            <v-icon>$expand</v-icon>
          </v-btn>
        </v-toolbar>
        <v-slide-y-reverse-transition
          tag="div"
          class="d-flex flex-column message-box"
          group
          hide-on-leave
        >
          <AppMessageItem
            v-for="message in messagesShown"
            :key="message.id"
            v-model="message.show"
            class="message-item"
            :colored-border="showAll"
            border="left"
            :type="message.type"
            :timeout="timeout"
            dismissible
            :elevation="showAll ? 0 : 10"
            @close="deleteMessage(message.id)"
          >
            <small>{{ formatTime(message.time) }}</small>
            <div>
              {{ message.text }}
            </div>
          </AppMessageItem>
        </v-slide-y-reverse-transition>
      </v-card>
    </Portal>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.message-item {
  width: 100%;
}
.message-card {
  position: fixed;
  z-index: 210;
  right: 15px;
  bottom: calc(#{$footer-height} + 5px);
  max-height: 100vh;
  visibility: hidden;
  &.message-card--open {
    visibility: visible;
    overflow: hidden;
    max-height: calc(100vh - #{$footer-height} - #{$app-bar-height} - 10px);
    .message-box {
      justify-content: initial;
      height: auto;
      overflow-y: overlay;
      pointer-events: auto;
      .message-item {
        transition: none !important;
        margin: 0;
        border-radius: 0;
        border-top: 1px solid #5656563d !important;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }
}
.message-box {
  overflow-y: visible;
  visibility: visible;
  height: calc(100vh - #{$footer-height} - 5px);
  justify-content: end;
  pointer-events: none;
  .message-item {
    pointer-events: initial;
    user-select: initial;
  }
}
:deep(.v-alert__content) {
  max-width: 300px;
}
</style>

<i18n lang="yaml">
zh:
  noNew: 没有新的通知
  clearAll: 清除所有通知
en:
  noNew: No New Notifications
  clearAll: Clear All Notifications
</i18n>
