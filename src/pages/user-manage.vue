<script setup lang="ts">
import {
  getUsers,
  getGroups,
  updateUser,
  deleteUser,
  type Group,
  type IUserData,
  type Role,
} from '@/api/users'
import type { DataTableHeader } from 'vuetify'
import { formatTime } from '@/utils/date'

const { t } = useI18n()
const headers: DataTableHeader[] = [
  { text: t('username'), value: 'username' },
  { text: t('group'), value: 'groups' },
  { text: t('name'), value: 'name' },
  { text: t('email'), value: 'email' },
  { text: t('joinDate'), value: 'joinDate' },
  { text: t('actions'), value: 'actions', sortable: false, align: 'end' },
]
const loading = ref(true)

const users = ref<IUserData[]>([])
const groups = ref<Group[]>([])
getGroups().then((promise) => (groups.value = promise.data))
getUsers().then((promise) => {
  users.value = promise.data.map((user) => ({
    id: user.id,
    username: user.username,
    name: user.name || '',
    email: user.email || '',
    joinDate: formatTime(user.joinDate),
    groups: user.groups,
  }))
  loading.value = false
})

function groupColor(id: number) {
  const name = groupName(id)
  switch (name) {
    case 'superuser':
      return 'accent'
    case 'admin':
      return 'primary darken-3'
    case 'staff':
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
            <template #item.groups="{ item }">
              <v-chip
                v-for="(groupId, i) in item.groups"
                :key="i"
                :color="groupColor(groupId)"
              >
                {{ groupName(groupId) }}
              </v-chip>
            </template>
            <template #item.actions="{ item }">
              <v-icon class="mr-1" size="20" title="编辑" @click="() => {}">
                $mdi-pencil
              </v-icon>
              <v-icon size="20" title="删除" @click.stop="() => {}">
                $mdi-delete
              </v-icon>
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
