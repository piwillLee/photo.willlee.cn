export const getAssetURL = (image, id) => {
	// 参数一：相对路径
	// 参数二：当前路径的URL
	return new URL(`../assets/album/${image}/l${id}.jpg`, import.meta.url).href;
};
