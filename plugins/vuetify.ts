import '@mdi/font/css/materialdesignicons.css' // mdi-icon用
import { createVuetify } from 'vuetify'
import { VApp, VAppBar, VAlert, VBtn, VCard, VCheckbox, VContainer, VForm, VIcon, VMain, VTable, VTextField } from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
        VApp,
        VAppBar,
      VAlert,
      VBtn,
      VCard,
      VCheckbox,
      VContainer,
      VForm,
      VIcon,
      VMain,
      VTable,
      VTextField
    }
  })

  nuxtApp.vueApp.use(vuetify)
})