import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './assets/css/index.css';

// 深色模式
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/theme-chalk/display.css';
import 'element-plus/theme-chalk/display.css';
import './assets/css/css-vars.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';
import App from './App.vue';
import VueLazyLoad from 'vue3-lazyload';
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.use(VueViewer);
app.use(VueLazyLoad);

const pinia = createPinia();
app.use(pinia);
app.use(router);

app.mount('#app');
