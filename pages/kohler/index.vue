<template>
	<view class="container">
		<view class="top-pic"></view>
		<swiper class="swiper" :current="current" :circular="circular" :vertical="vertical" @change="onSwiperChange"
		 :disable-touch="disableTouch">
			<swiper-item>
				<view class="pages pages-1 ">
					<view class="p-icons p1i1 animate__animated animate__zoomIn animate__slow"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="pages pages-2 ">
					<view class="sign-box">
						<view class="sign-btns" v-if="signBtns">
							<view class="s-btn s-btn-1" @click="tap('signMain','1')">
								<img class="b-img" src="../../static/kohler/b1.png" alt="行程安排">
							</view>
							<view class="s-btn s-btn-2" @click="tap('signMain','2')">
								<img class="b-img" src="../../static/kohler/b2.png" alt="展厅地图">
							</view>
							<view class="s-btn s-btn-3" @click="tap('signMain','3')">
								<img class="b-img" src="../../static/kohler/b3.png" alt="酒店地图">
							</view>
							<view class="s-btn s-btn-4" @click="tap('signMain','4')">
								<img class="b-img" src="../../static/kohler/b4.png" alt="现场签到">
							</view>
							<view class="s-btn s-btn-5" @click="tap('signMain','5')">
								<img class="b-img" src="../../static/kohler/b5.png" alt="精彩瞬间">
							</view>
							<view class="s-btn s-btn-6" @click="tap('signMain','6')">
								<img class="b-img" src="../../static/kohler/b6.png" alt="Who is Mardarin?">
							</view>
							<view class="s-btn s-btn-7" @click="tap('signMain','7')">
								<img class="b-img" src="../../static/kohler/b7.png" alt="抽奖号">
							</view>
						</view>
						<view class="sign-main" v-if="signMain">
							<view class="s-main animate__animated animate__fadeIn animate__slow" v-if="mainVal==1">
								<img class="m-img" src="../../static/kohler/liucheng.png" alt="行程安排">
								<view class="m-btns">
									<view class="m-back" @click="tap('signBtns')">返回首页</view>
								</view>
							</view>
							<view class="s-main animate__animated animate__fadeIn animate__slow" v-if="mainVal==2">
								<img class="m-img" src="../../static/kohler/address.png" alt="展厅地图">
								<view class="m-btns">
									<view class="m-back" @click="tap('signBtns')">返回首页</view>
								</view>
							</view>
							<view class="s-main animate__animated animate__fadeIn animate__slow" v-if="mainVal==3">
								<img class="m-img" src="../../static/kohler/jiudian.png" alt="酒店安排">
								<view class="m-btns">
									<view class="m-back" @click="tap('signBtns')">返回首页</view>
								</view>
							</view>
							<view class="s-main animate__animated animate__fadeIn animate__slow" v-if="mainVal==4">
								<view class="sign-form">
									<view class="sign-input">
										<input class="s-input" type="text" v-model="formData['UserName']" placeholder="姓名" placeholder-class="sign-place" />
									</view>
									<view class="sign-input">
										<input class="s-input" type="number" v-model="formData['UserPhone']" placeholder="电话" placeholder-class="sign-place" />
									</view>
									<view class="sign-input">
										<input class="s-input" type="text" v-model="formData['UserWX']" placeholder="微信" placeholder-class="sign-place" />
									</view>
									<view class="sign-input">
										<input class="s-input" type="text" v-model="formData['UserCompany']" placeholder="公司名称" placeholder-class="sign-place" />
									</view>
								</view>
								<view class="m-btns">
									<view class="m-back submit" @click="getData">确定</view>
									<view class="m-back" @click="tap('signBtns')">返回首页</view>
								</view>
							</view>
							<view class="s-main animate__animated animate__fadeIn animate__slow" v-if="mainVal==5">
								<img class="m-img" src="../../static/kohler/qrcode.png" alt="精彩瞬间">
								<view class="m-btns">
									<view class="m-back" @click="tap('signBtns')">返回首页</view>
								</view>
							</view>
							<view class="s-main animate__animated animate__fadeIn animate__slow" v-if="mainVal==6">
								<view class="mardarin">Mardarin乐队 POSTER</view>
								<view class="m-btns">
									<view class="m-back" @click="tap('signBtns')">返回首页</view>
								</view>
							</view>
							<view class="s-main animate__animated animate__fadeIn animate__slow" v-if="mainVal==7">
								抽奖号
								<view class="m-btns">
									<view class="m-back" @click="tap('signBtns')">返回首页</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	var graceChecker = require("../../common/graceChecker.js");
	export default {
		data() {
			return {
				disableTouch: false,
				vertical: true, //是否纵向
				circular: false, //是否采用衔接滑动
				current: 0,
				pageDetailIndex: 1,
				canLoop: false,
				signBtns: true,
				signMain: false,
				mainVal: 0,
				kohlerSign: "",
				loading: false,
				formData: {
					UserName: "",
					UserPhone: "",
					UserWX: "",
					UserCompany: ""
				}

			}
		},
		components: {},
		onLoad() {
			var that = this;
			//console.log(this.details);
		},
		onShow() {
			var that = this;
		},
		methods: {
			onSwiperChange(e) {
				if (e.detail.current == this.pageDetailIndex) {
					// this.disableTouch = this.canLoop;
				}
			},
			tap(type, key) {
				var that = this;
				if (type == "signMain") {
					that.mainVal = key;
					that.signMain = true;
					that.signBtns = false;
				} else {
					that.mainVal = 0;
					that.signMain = false;
					that.signBtns = true;
				}
			},
			getData() {
				var that = this;
				if (that.loading == true) {
					return
				}
				console.log(that.formData)
				var rule = [{
						name: "UserName",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请填写姓名"
					},
					{
						name: "UserPhone",
						checkType: "phoneno",
						checkRule: "",
						errorMsg: "请填写正确的手机号"
					}
				];
				var checkRes = graceChecker.check(that.formData, rule);
				that.loading = true
				if (checkRes) {
					// uni.request({
					// 	url: "",
					// 	data: {},
					// 	method: "GET",
					// 	header: {},
					// 	success(res) {
					// 		console.log("getData-success：", res)
					// 		//result = res.data
					// 	},
					// 	fail(err) {
					// 		console.log("getData-err：", err)
					// 	},
					// 	complete() {}
					// })
					that.loading = false;
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
					that.loading = false;
				}
			},
			storageCode() {
				uni.getStorage({
					key: "kohlerSign",
					success: function(res) {
						user = res.data;

					},
					fail() {}
				})
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
		background: url(../../static/kohler/bg.jpg) 50% 50% no-repeat;
		background-size: cover;
		position: relative;
	}

	.container::after {
		width: 100%;
		height: 20%;
		content: "INVITATION";
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		align-content: center;
		align-items: flex-end;
		justify-content: center;
		line-height: 3;
		font-size: 50upx;
		opacity: 0.6;
		letter-spacing: 3px;
		color: #736c60;
	}

	.top-pic {
		width: 100%;
		height: 50%;
		content: "";
		background: url(../../static/kohler/top-pic.png) 50% 0 no-repeat;
		background-size: 100% auto;
		position: absolute;
		/* z-index: 10; */
		top: 0;
		left: 0;
	}

	.swiper {
		flex: 1;
		min-height: 100%;
		position: relative;
		z-index: 50;
	}

	.swiper-item {
		flex: 1;
	}

	.pages {
		min-height: 100%;
		min-width: 100%;
		/* background-image: url(../../static/kohler/bg.jpg);
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: 95% auto; */
		position: relative;
	}

	.pages:after {
		content: "";
		width: 80rpx;
		height: 80rpx;
		background: url(../../static/kohler/arrow.png) 50% 90% no-repeat;
		background-size: contain;
		position: absolute;
		z-index: 10;
		bottom: 10px;
		left: 45.5%;
		opacity: 0.6;
		animation: opener .5s ease-in-out alternate infinite;
	}

	.pages.pages-2:after {
		background: none
	}

	@-webkit-keyframes opener {
		100% {
			bottom: 20px;
		}
	}

	@keyframes opener {
		100% {
			bottom: 20px;
		}
	}

	.p-icons {
		width: 100%;
		height: 70%;
		background-image: url(../../static/kohler/index.png);
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: 100% auto;
		position: absolute;
		z-index: 1;
	}

	.p1i1 {
		left: 0;
		bottom: 3%;
	}

	.sign-box {
		position: absolute;
		width: 100%;
		height: 70%;
		left: 0;
		bottom: 3%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sign-btns {
		width: 75%;
	}

	.s-btn {
		width: 100%;
		margin-bottom: 30upx;
	}

	.b-img {
		width: 100%;
	}

	.sign-main {
		width: 80%;
		color: #efbc96;
	}

	.m-img {
		width: 100%;
	}

	.s-main {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		align-content: flex-start;
		flex-direction: column;
	}

	.sign-form {
		width: 100%;
	}

	.sign-input {
		margin-bottom: 40upx;
	}

	.s-input {
		border: 1px solid #efbc96;
		padding: 30upx;
	}

	.sign-place {
		color: #efbc96;
		font-size: 36upx;
	}

	.mardarin {
		font-size: 46upx;
		line-height: 5;
		letter-spacing: 2upx;
	}


	.m-btns {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-content: center;
		align-items: center;
		justify-content: space-around;
		padding: 10upx 0;
		margin-top: 50upx;
	}

	.m-back {
		width: 49%;
		height: 100upx;
		background: url(../../static/kohler/back-btn.png) 50% 50% no-repeat;
		background-size: 100% auto;
		text-indent: -9999999px;
	}

	.submit {
		background-image: url(../../static/kohler/ok-btn.png)
	}

	.animate_icon {
		animation-iteration-count: infinite;
		animation-direction: alternate
	}
</style>
