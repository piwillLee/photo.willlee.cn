import { defineStore } from 'pinia';
import { getAlbum, getAlbumItem } from '@/service/album/album';
import { localCache } from '@/utils/cache';

const useAlbumStore = defineStore('ablum', {
	state: () => ({
		albumList: [],
		albumTotal: localCache.getCache('albumTotal'),
		albumsId: localCache.getCache('albumsId') ?? [],
		albumItemsList: localCache.getCache('albumItemsList') ?? [],
		isEnd: false,
		defaultImg: new URL('@/assets/img/loading.png', import.meta.url).href,
		currentAlbum: null,
	}),
	actions: {
		async getAlbumAction() {
			const ablumListRes = await getAlbum();
			this.albumTotal = ablumListRes.data.total;
			this.albumList = ablumListRes.data.data;
			this.albumList.forEach((item) => {
				this.albumsId.push(item.id);
			});

			localCache.setCache('albumsId', this.albumsId);
			localCache.setCache('albumTotal', this.albumTotal);
			// console.log(this.albumList);
			this.getAlbumItemArray(this.albumList);

			const firstGetTime = new Date().getTime();
			localCache.setCache('firstGetTime', firstGetTime);
		},
		async getAlbumItemAction(id: number) {
			const albumItemsRes = await getAlbumItem(id);
			for (let i = 0; i < this.albumList.length; i++) {
				if (this.albumList[i].id == id) {
					this.albumItemsList[i] = {
						idData: this.albumList[i],
						itemData: albumItemsRes.data.data,
					};
				}
			}
			localCache.setCache('albumItemsList', this.albumItemsList);
		},
		getAlbumItemArray(albumList) {
			albumList.forEach((item) => {
				// console.log(item.id);
				this.getAlbumItemAction(item.id);
			});
		},
		getAlbumData() {
			for (let i = 0; i < this.albumList.length; i++) {
				this.albumItemsList[i] = {
					idData: this.albumList[i],
					itemData: this.albumItemsList[i],
				};
			}
		},
		getAlbumById(id) {
			this.albumItemsList.forEach((item) => {
				if (item.idData.id == id) {
					// console.log(item.idData.id);
					// console.log(item);
					this.currentAlbum = item;
					// console.log(this.currentAlbum);
				}
			});
		},
	},
});
export default useAlbumStore;
