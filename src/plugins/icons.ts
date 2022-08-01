import { mapKeys, kebabCase } from 'lodash'
import type { VuetifyIcon } from 'vuetify/types/services/icons.js'

import {
  mdiAlert,
  mdiAlertOctagon,
  mdiAccount,
  mdiAccountOutline,
  mdiAccountGroup,
  mdiEye,
  mdiEyeOff,
  mdiChevronUp,
  mdiContentSave,
  mdiContentCopy,
  mdiDelete,
  mdiFileDownload,
  mdiFileUpload,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiHelpCircle,
  mdiKeyVariant,
  mdiLogin,
  mdiLogout,
  mdiLockOutline,
  mdiMenuDown,
  mdiPinOutline,
  mdiPinOffOutline,
  mdiPenOff,
  mdiPencil,
  mdiPaletteOutline,
  mdiRefresh,
  mdiTable,
  mdiTableRowPlusAfter,
  mdiTableRowPlusBefore,
  mdiTableOff,
  mdiTriangle,
  mdiTableEdit,
  mdiBackburger,
  mdiMenuOpen,
  mdiAlphabeticalVariant,
  mdiTranslate,
  mdiIdeogramCjkVariant,
  mdiClockOutline,
  mdiBellRemove,
  mdiBellBadgeOutline,
  mdiBellOutline,
  mdiMonitorDashboard,
  mdiViewList,
} from '@mdi/js'

const mdi = {
  mdiAccount,
  mdiAccountOutline,
  mdiAccountGroup,
  mdiEye,
  mdiEyeOff,
  mdiChevronUp,
  mdiContentSave,
  mdiContentCopy,
  mdiDelete,
  mdiFileDownload,
  mdiFileUpload,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiHelpCircle,
  mdiKeyVariant,
  mdiLogin,
  mdiLogout,
  mdiLockOutline,
  mdiMenuDown,
  mdiPinOutline,
  mdiPinOffOutline,
  mdiPenOff,
  mdiPencil,
  mdiPaletteOutline,
  mdiRefresh,
  mdiTable,
  mdiTableRowPlusAfter,
  mdiTableRowPlusBefore,
  mdiTableOff,
  mdiTriangle,
  mdiTableEdit,
  mdiBackburger,
  mdiMenuOpen,
  mdiAlphabeticalVariant,
  mdiTranslate,
  mdiIdeogramCjkVariant,
  mdiClockOutline,
  mdiBellRemove,
  mdiBellBadgeOutline,
  mdiBellOutline,
  mdiMonitorDashboard,
  mdiViewList,
}

const mdIcons = mapKeys(mdi, (v, k) => kebabCase(k))
// fix vuetify#14327(https://github.com/vuetifyjs/vuetify/issues/14327)
mdIcons['warning'] = mdiAlert
mdIcons['error'] = mdiAlertOctagon

const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob('@/assets/icons/*.svg', {
      eager: true,
      import: 'default',
    })
  ).map(([k, v]) => [
    k
      .split(/(\\|\/)/g)
      .pop()!
      .replace(/\.[^/.]+$/, ''),
    { component: v } as VuetifyIcon,
  ])
)

export default {
  ...svgIcons,
  ...mdIcons,
}
