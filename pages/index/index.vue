<template>
	<view class="container">
		<view class="block slidebox">
			<view class="swiper-block" :class="['spacing-'+spacing]" v-if="swiperleng">
				<swiper class="swiper-box swiper-slide" :indicator-dots="swiperleng>1?true:false" autoplay="autoplay" circular="circular"
				 interval="3000" duration="500" indicator-color="#E0E0E0" indicator-active-color="#999">
					<swiper-item v-for="(slide,index) in swiperList" :key="index">
						<view class="swiper-item">
							<image class="slideImg" @click="linkTo(slide.link,slide.id)" lazy-load="true" :src="slide.original_src" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="slide-ov">
			左右滑动探索更多美好
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 1,
				swiperList: [],
				swiperleng: 0,
				spacing: "default" //default 、medium、big
			}
		},
		onLoad(e) {
			console.log("onLoad")
			var that = this;
			that.id = e.id || 1;
		},
		onShow() {
			console.log("onShow")
			var that = this;
			uni.showLoading({
				title: "加载中..."
			})
			that.getDatas('slideShow');
		},
		onReady() {
			console.log("onReady")
			var that = this;
		},
		onPullDownRefresh() {
			var that = this;
		},
		components: {},
		computed: {},
		methods: {
			getDatas(inter) {
				var that = this;
				let data = {
					"inter": inter,
					"parm": "?id=" + that.id
				}
				data["fun"] = function(res) {
					uni.stopPullDownRefresh()
					if (res.success) {
						that.swiperList = res.data.list
						that.swiperleng = res.data.total
					}
					uni.hideLoading()
				}
				that.$store.dispatch("getData", data)
			}
		}
	}
</script>

<style scoped>
	/* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	.container {
		flex: 1;
		width: 750rpx;
		min-height: inherit;
		min-width: inherit;
		background: url(../../static/bg.jpg) no-repeat 50% 50%;
		background-size: cover;
		position: relative;
	}

	.slidebox {
		position: absolute;
		bottom: 140upx;
		width: 86%;
		padding: 0 7%;
	}

	.swiper-box {
		width: 100%;
		border: 2px solid #ac9375;
	}

	.swiper-slide {
		height: 970upx;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #eee;
		color: #fff;
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
	}

	.slide-ov {
		position: absolute;
		color: #fff;
		text-align: center;
		width: 100%;
		font-size: 32upx;
		bottom: 50upx;
	}
</style>
