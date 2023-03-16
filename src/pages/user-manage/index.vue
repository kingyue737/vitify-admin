<script setup lang="ts">
import {
  getUsers,
  getGroups,
  updateUser,
  deleteUser,
  type Group,
  type IUserData,
} from '@/api/users'
import type { DataTableHeader } from 'vuetify'
import { formatTime } from '@/utils/date'
import DialogConfirm from '@/components/DialogConfirm.vue'

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
getUsers()
  .then((promise) => {
    users.value = promise.data
  })
  .finally(() => {
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

const dialogDelete = ref<InstanceType<typeof DialogConfirm> | null>(null)
function showDialogDelete(id: number) {
  dialogDelete.value?.open(t('confirmMsg')).then(async (confirmed: boolean) => {
    if (confirmed) {
      try {
        await deleteUser(id)
        Message.success(t('deleted'))
        users.value = (await getUsers()).data
      } catch (e) {
        Message.error(e)
      }
    }
  })
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
            <template #item.username="{ item }">
              <router-link :to="item.username">{{ item.username }}</router-link>
            </template>
            <template #item.groups="{ item }">
              <v-chip
                v-for="(groupId, i) in item.groups"
                :key="i"
                :color="groupColor(groupId)"
              >
                {{ groupName(groupId) }}
              </v-chip>
            </template>
            <template #item.joinDate="{ item }">{{
              formatTime(item.joinDate)
            }}</template>
            <template #item.actions="{ item }">
              <v-icon
                class="mr-1"
                size="20"
                :title="t('edit')"
                @click="() => {}"
              >
                $mdi-pencil
              </v-icon>
              <v-icon
                size="20"
                :title="t('delete')"
                @click.stop="showDialogDelete(item.id)"
              >
                $mdi-delete
              </v-icon>
            </template>
          </v-data-table>
          <DialogConfirm ref="dialogDelete" />
        </v-head-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<route lang="json">
{ "meta": { "icon": "XXX" } }
</route>

<i18n lang="json">
{
  "en": {
    "confirmMsg": "Are you sure to delete this user?"
  },
  "zh": {
    "confirmMsg": "你确定要删除此用户吗？"
  }
}
</i18n>
