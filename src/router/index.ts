import useMainStore from '@/stores/mainStore/mainStore';
import { nextTick } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/home/home.vue'),
		},
		{
			path: '/album/:id',
			name: 'album',
			beforeEnter: (to, from) => {
				const mianStore = useMainStore();
				mianStore.isHomePage = true;
			},
			component: () => import('../views/album/album.vue'),
		},
		{
			path: '/contents',
			name: 'contents',
			component: () => import('../views/contents/contents.vue'),
		},
		{
			path: '/all',
			name: 'all',
			component: () => import('../views/all/all.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/about/about.vue'),
		},
		{
			// 输入地址有误 404
			path: '/:pathMatch(.*)',
			component: () => import('@/views/not-found/not-found.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// 始终滚动到顶部
		return { top: 0 };
	},
});

router.beforeEach((to, from, next) => {
	const mianStore = useMainStore();
	mianStore.isHomePage = false;
	if (to.path == '/') {
		mianStore.isHomePage = true;
	} else if (from.path != '/') {
		mianStore.isHomePage = false;
	}
	window.scrollTo(0, 0);
	next();
});

export default router;
