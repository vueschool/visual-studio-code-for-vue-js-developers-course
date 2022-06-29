import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// TODO: something is left undone, fix it!
app.use(createPinia());
app.use(router);

app.mount('#app');
// TODO: Something else
