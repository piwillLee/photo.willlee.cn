import setBgc from './setBgc.js';

export class Swiper {
	// 构造器
	constructor(options) {
		// 传参数
		this.$options = options;
		this.__init();
		this.__timers();
		this.__upMove();
		this.__downMove();
		this.__getCurrentImg();
	}

	// 初始化
	__init() {
		// 获得 DOM数组
		this.SwiperContent = document.querySelector(this.$options.SwiperContent).children;

		// class 数组
		this.classList = this.$options.classList;
		this.__move(this.classList);
		// console.log('111');
	}

	__move(list) {
		[...this.SwiperContent].forEach((item, index) => {
			item.setAttribute('class', list[index]);
			// item.classList.add(list[index]);
		});
	}

	__upMove() {
		// 删除数组最后一个元素，并返回该元素
		this.a = this.classList.pop();
		// this.a = this.classList.shift();
		// console.log(this.a);

		// 添加元素到数组第一个，并返回新数组
		this.classList.unshift(this.a);
		// this.classList.push(this.a);

		// 再一次遍历，添加class
		this.__move(this.classList);
	}
	__downMove() {
		// 删除数组最后一个元素，并返回该元素
		// this.a = this.classList.pop();
		this.a = this.classList.shift();
		// console.log(this.a);

		// 添加元素到数组第一个，并返回新数组
		// this.classList.unshift(this.a);
		this.classList.push(this.a);

		// 再一次遍历，添加class
		this.__move(this.classList);
	}

	__timers() {
		setInterval(() => {
			this.__upMove();
			this.__setBgColor();
		}, 2000000);
	}

	// 拿到当前最前的图片
	__getCurrentImg() {
		const currentImg = document.querySelector('.one');
		return currentImg.childNodes[0];
	}

	// 设置背景颜色
	__setBgColor() {
		setBgc(this.__getCurrentImg(), '.home-swiper');
	}
}
