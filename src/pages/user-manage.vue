<script setup lang="ts">
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  getGroups,
} from '@/api/users'
import type { DataTableHeader } from 'vuetify'
import type { Group, IUserData, Role } from '@/api/types'
import { formatTime } from '@/utils/date'

const headers: DataTableHeader[] = [
  { text: '用户名', value: 'username' },
  { text: '用户组', value: 'group' },
  { text: '姓名', value: 'name' },
  { text: '邮箱', value: 'email' },
  { text: '注册时间', value: 'dateJoined' },
  { text: '最后登录', value: 'lastLogin' },
]

const rawUsers = ref<IUserData[]>([])
const groups = ref<Group[]>([])
getGroups().then((promise) => (groups.value = promise.data))
getUsers().then((promise) => (rawUsers.value = promise.data))

const users = computed(() => {
  return rawUsers.value.map((user) => ({
    username: user.username,
    name: user.first_name + user.last_name,
    email: user.email,
    dateJoined: formatTime(user.date_joined),
    lastLogin: formatTime(user.last_login),
    group: user.groups.reverse(),
  }))
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
        <v-head-card title="用户列表" icon="$mdi-view-list">
          <v-data-table :headers="headers" :items="users" fixed-header>
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
