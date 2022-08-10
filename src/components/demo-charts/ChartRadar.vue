<script setup lang="ts">
import type { ECOption } from '@/plugins/echarts'
const option: ECOption = {
  backgroundColor: 'transparent',
  radar: {
    radius: '66%',
    center: ['50%', '42%'],
    splitNumber: 8,
    splitArea: {
      areaStyle: {
        color: 'rgba(127,95,132,.3)',
        opacity: 1,
        shadowBlur: 45,
        shadowColor: 'rgba(0,0,0,.5)',
        shadowOffsetX: 0,
        shadowOffsetY: 15,
      },
    },
    indicator: [
      { name: 'Sales' },
      { name: 'Administration' },
      { name: 'Technology' },
      { name: 'Customer Support' },
      { name: 'Development' },
      { name: 'Marketing' },
    ],
  },
  legend: {
    left: 'center',
    bottom: '10',
    data: ['Allocated Budget', 'Expected Spending', 'Actual Spending'],
  },
  series: [
    {
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        shadowBlur: 13,
        shadowColor: 'rgba(0,0,0,.2)',
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        opacity: 1,
      },
      data: [
        {
          value: [5000, 7000, 12000, 11000, 15000, 14000],
          name: 'Allocated Budget',
        },
        {
          value: [4000, 9000, 15000, 15000, 13000, 11000],
          name: 'Expected Spending',
        },
        {
          value: [5500, 5000, 12000, 15000, 8000, 6000],
          name: 'Actual Spending',
        },
      ],
    },
  ],
}
</script>

<template>
  <v-chart :option="option" autoresize />
</template>
