// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './assets/main.css'; 
// import { createMetaManager } from 'vue-meta';
// import createMetaManager  from 'vue-meta';
// import 'bulma/css/bulma.min.css';
/* Using instead color swatch in index.html | https://jenil.github.io/bulmaswatch/pulse/bulmaswatch.min.css   */
import './styles.css';

// createApp(App).mount('#app')
// const app = createApp(App);
// const metaManager = new createMetaManager();
// createApp(App).use(router, metaManager).mount('#app');
createApp(App).use(router).mount('#app');
