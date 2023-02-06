import hyRequest from '..';

export function getAlbum() {
	return hyRequest.get({
		url: '/albums',
	});
}

/**
 *  获取相册图片
 * @param id 相册id
 */
export function getAlbumItem(id: number) {
	return hyRequest.get({
		url: `/images?album_id=${id}`,
	});
}
