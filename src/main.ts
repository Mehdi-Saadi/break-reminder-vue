import App from '@/App.vue';
import i18n from '@/langs';
import router from '@/router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');

// core scripts
import '@/core/window';
import '@/core/tray';
