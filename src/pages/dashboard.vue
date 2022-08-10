<script setup lang="ts">
import ChartRadar from '@/components/demo-charts/ChartRadar.vue'
import ChartLine from '../components/demo-charts/ChartLine.vue'
import ChartBar from '../components/demo-charts/ChartBar.vue'
import ChartPie from '../components/demo-charts/ChartPie.vue'
import StatsCard from '../components/StatsCard.vue'

const stats = ref([
  {
    icon: '$mdi-web',
    title: 'Bandwidth',
    value: 230,
    unit: 'GB',
    color: 'primary',
    caption: 'Up: 100, Down: 130',
  },
  {
    icon: '$mdi-rss',
    title: 'Submissions',
    value: 108,
    color: 'primary',
    caption: 'Too young, too naive',
  },
  {
    icon: '$mdi-send',
    title: 'Requests',
    value: 1238,
    color: 'warning',
    caption: 'Limit: 1320',
  },
  {
    icon: '$mdi-bell',
    title: 'Messages',
    value: 9042,
    color: 'primary',
    caption: 'Warnings: 300, erros: 47',
  },
  {
    icon: '$mdi-github',
    title: 'Github Stars',
    value: NaN,
    color: 'grey',
    caption: 'API has no response',
  },
  {
    icon: '$mdi-currency-cny',
    title: 'Total Fee',
    value: 2300,
    unit: '￥',
    color: 'error',
    caption: 'Upper Limit: 2000 ￥',
  },
])
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="stat in stats"
        :key="stat.title"
        cols="12"
        sm="6"
        md="4"
        lg="2"
      >
        <StatsCard
          :title="stat.title"
          :unit="stat.unit"
          :color="stat.color"
          :icon="stat.icon"
          :value="stat.value"
        >
          <template #footer>
            {{ stat.caption }}
          </template>
        </StatsCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="12">
        <v-card class="pa-2">
          <ChartLine />
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-2">
          <ChartRadar />
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-2">
          <ChartPie />
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-2">
          <ChartBar />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-card:not(.stats-card) {
  height: 350px;
}
</style>

<route lang="json">
{
  "meta": {
    "title": "dashboard",
    "icon": "$mdi-monitor-dashboard",
    "drawerIndex": 1
  }
}
</route>
