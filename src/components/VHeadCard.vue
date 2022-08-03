<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  icon: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  iconClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <v-card
    v-bind="$attrs"
    class="v-head-card pa-3 d-flex flex-column justify-space-between"
  >
    <div class="d-flex justify-start">
      <v-sheet
        :color="color"
        :height="icon ? 72 : undefined"
        elevation="3"
        class="text-center v-head-card__heading mb-n5 pa-5"
        dark
      >
        <slot v-if="$slots.heading" name="heading" />

        <div
          v-else-if="title && !icon"
          class="text-h5 font-weight-bold"
          v-text="title"
        />

        <v-icon v-else-if="icon" size="32" :class="iconClass">
          {{ icon }}
        </v-icon>

        <div v-if="text" class="text-h5 font-weight-thin" v-text="text" />
      </v-sheet>
      <div
        v-if="icon && title"
        class="ml-2 text-h5 font-weight-light v-head-card__title"
        v-text="title"
      />
      <div
        v-if="$slots['after-heading']"
        id="after-heading"
        class="ml-auto d-flex align-center justify-space-between"
        style="max-width: 80%"
      >
        <slot name="after-heading" />
      </div>
    </div>

    <div
      class="flex-grow-1 v-head-card__content fill-height"
      style="position: relative; min-height: 0"
    >
      <slot />
    </div>
    <template v-if="$slots.actions">
      <v-card-actions class="pb-0 px-0 flex-wrap">
        <slot name="actions" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.v-head-card {
  margin-top: $card-heading-margin;
  max-height: calc(100% - #{$card-heading-margin});
  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.fill-height {
    height: calc(100% - #{$card-heading-margin});
  }
  &__heading {
    position: relative;
    top: -22px;
    transition: 0.3s ease;
    z-index: 3;
    border-radius: 4px;
  }
  :deep(#after-heading) > * {
    margin-left: 1em;
  }
}
</style>
