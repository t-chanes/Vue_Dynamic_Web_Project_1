import './assets/index.css'
import 'iconify-icon'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

/* USED FOR GLOBAL ERROR HANDLING
app.config.errorHandler = (error) => {
  //EXAMPLE
}
*/

app.mount('#app')
