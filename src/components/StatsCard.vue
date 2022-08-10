<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    iconClass?: string
    color: string
    title: string
    value: number | null
    unit?: string
    formatter?: (v: number) => string
  }>(),
  {
    iconClass: '',
    value: null,
    unit: '',
    formatter: (v: number) => v.toString(),
  }
)
</script>

<template>
  <v-card class="stats-card" v-bind="$attrs" v-on="$listeners">
    <v-icon class="stats-icon" :color="color" :class="iconClass">{{
      icon
    }}</v-icon>
    <div class="card-title ml-auto text-right">
      <span
        class="card-title--name font-weight-bold text--darken-2"
        :class="`${color}--text`"
        v-text="title"
      />
      <h3
        class="font-weight-regular text--primary d-inline-block ml-2"
        style="font-size: 18px"
      >
        {{ value != null ? formatter(value) : '' }}
        <small v-if="unit">{{ unit }}</small>
      </h3>
      <v-divider />
    </div>
    <div
      class="v-alert__border v-alert__border--top v-alert__border--has-color"
      :class="color"
    />
    <div
      v-if="$slots.footer"
      class="grey--text text-right stats-footer text-caption"
    >
      <slot name="footer" />
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.stats-card {
  padding: 5px;
  padding-top: 10px;
  .card-title {
    width: fit-content;
    .card-title--name {
      display: inline-block;
      backdrop-filter: blur(3px);
    }
  }
  .caption {
    font-size: 12px;
    letter-spacing: 0;
  }
  .stats-icon {
    position: absolute;
    opacity: 0.3;
    :deep(svg) {
      height: 35px;
    }
  }
  .stats-footer {
    :deep(span) {
      display: inline-block;
      font-size: 12px !important;
      letter-spacing: 0 !important;
    }
  }
}
</style>
