import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
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

import VueLazyload from 'vue-lazyload';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.use(VueViewer);
app.use(VueLazyload, {
	lazyComponent: true,
	preLoad: 1.3,
	error: '@/assets/img/loading.gif',
	loading: '@/assets/img/loading.gif',
	attempt: 1,
	// the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
	listenEvents: ['scroll'],
});

const pinia = createPinia();
app.use(pinia);
app.use(router);

app.mount('#app');
