import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
const useMainStore = defineStore('main', {
	state: () => ({
		isHomePage: false,
	}),
	actions: {
		handleIsHomePage() {
			const route = useRoute();
			if (route.path == '/') {
				// console.log('home page');
				this.isHomePage = true;
			} else {
				this.isHomePage = false;
				// console.log(route.path);
			}
		},
	},
});
export default useMainStore;
