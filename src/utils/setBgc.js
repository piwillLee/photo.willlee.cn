import ColorThief from '@/utils/color-thief.mjs';
import gsap from 'gsap';

// 设置背景颜色
export default function setBgc(img, target) {
	const colorThief = new ColorThief();
	const resColor = colorThief.getColor(img); // [158, 173, 171]
	// reb 转换成 hex
	const rgbToHex = (r, g, b) =>
		'#' +
		[r, g, b]
			.map((x) => {
				const hex = x.toString(16);
				return hex.length === 1 ? '0' + hex : hex;
			})
			.join('');
	const hex = rgbToHex(resColor[0], resColor[1], resColor[2]); // #663399
	gsap.to(target, { backgroundColor: hex });
}
