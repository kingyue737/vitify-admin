<script setup lang="ts">
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  getGroups,
  type Group,
  type IUserData,
  type Role,
} from '@/api/users'
import type { DataTableHeader } from 'vuetify'
import { formatTime } from '@/utils/date'

const { t } = useI18n()
const headers: DataTableHeader[] = [
  { text: t('username'), value: 'username' },
  { text: t('group'), value: 'group' },
  { text: t('name'), value: 'name' },
  { text: t('email'), value: 'email' },
  { text: t('joiningDate'), value: 'joiningDate' },
  { text: t('lastLogin'), value: 'lastLogin' },
]
const loading = ref(true)

const users = ref<
  {
    username: string
    name: string
    email: string
    joiningDate: string
    lastLogin: string
    group: number[]
  }[]
>([])
const groups = ref<Group[]>([])
getGroups().then((promise) => (groups.value = promise.data))
getUsers().then((promise) => {
  users.value = promise.data.map((user) => ({
    username: user.username,
    name: user.name || '',
    email: user.email || '',
    joiningDate: formatTime(user.date_joined),
    lastLogin: formatTime(user.last_login),
    group: user.groups.reverse(),
  }))
  loading.value = false
})

function groupColor(id: number) {
  const name = groupName(id)
  switch (name) {
    case 'admin':
      return 'primary darken-3'
    case 'staff':
      return 'primary'
    case 'guest':
      return 'primary lighten-1'
    default:
      return ''
  }
}
function groupName(id: number) {
  return groups.value.find((group) => group.id === id)?.name || ''
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-head-card :title="t('listOf', [t('user')])" icon="$mdi-view-list">
          <v-data-table
            :headers="headers"
            :items="users"
            fixed-header
            :loading="loading"
          >
            <template #item.group="{ item }">
              <v-chip
                v-for="(groupId, i) in item.group"
                :key="i"
                :color="groupColor(groupId)"
              >
                {{ groupName(groupId) }}
              </v-chip>
            </template>
          </v-data-table>
        </v-head-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<route lang="json">
{
  "meta": {
    "title": "userManagement",
    "icon": "$mdi-account-group",
    "roles": ["admin"],
    "drawerGroup": "admin",
    "dataCy": "userManage"
  }
}
</route>
