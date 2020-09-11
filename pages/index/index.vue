<template>
	<view class="container">
		<view class="logo">
			<img src="../../static/logo.png" class="logo-img" alt="">
		</view>
		<view class="block slidebox">
			<view class="swiper-block" :class="['spacing-'+spacing]">
				<swiper class="swiper-box swiper-slide" :indicator-dots="false" :autoplay="autoplay" :circular="false" interval="3000"
				 duration="500" indicator-color="#E0E0E0" indicator-active-color="#999">
					<swiper-item v-if="swiperleng" v-for="(slide,index) in swiperList" :key="index">
						<view class="swiper-item">
							<image class="slideImg" lazy-load="true" :src="slide.original_src?sourceUrl+slide.original_src:''" mode="aspectFill"></image>
						</view>
					</swiper-item>
					<swiper-item v-else>
						<view class="swiper-item">
							<image class="slideImg" lazy-load="true" src="../../static/1.jpg" mode="aspectFill"></image>
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
				autoplay: false,
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
						that.swiperList = res.data.info.image;
						that.swiperleng = res.data.info.image.length;
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
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-direction: column;
	}

	.logo {
		height: 20%;
		padding: 5% 0;
		color: #FFFFFF;
		font-size: 40upx;
	}

	.logo-img {
		height: 100%;
	}

	.slidebox {
		/* position: absolute;
		bottom: 140upx; */
		width: 86%;
		height: 60%;
		padding: 0 7%;
	}

	.swiper-box {
		width: 100%;
		border: 2px solid #ac9375;
	}

	.swiper-slide,
	.swiper-block {
		height: 100%;
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
		/* position: absolute; */
		padding: 40upx 0 0;
		color: #fff;
		text-align: center;
		width: 100%;
		font-size: 32upx;
		/* bottom: 50upx; */
	}
</style>
