(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"3c1c":function(t,e,i){t.exports=i.p+"static/img/1.774dd09a.jpg"},5632:function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("e217");e=n(!1);var s=a(o);e.push([t.i,"\nuni-page-body[data-v-1c0ff281]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.container[data-v-1c0ff281]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%;min-height:inherit;min-width:inherit;background:url("+s+") no-repeat 50% 50%;background-size:cover;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.logo[data-v-1c0ff281]{height:20%;padding:5% 0;color:#fff;font-size:%?40?%}.logo-img[data-v-1c0ff281]{height:100%}.slidebox[data-v-1c0ff281]{\n\t/* position: absolute;\n\tbottom: 140upx; */width:86%;height:60%;padding:0 7%}.swiper-box[data-v-1c0ff281]{width:100%;border:2px solid #ac9375}.swiper-slide[data-v-1c0ff281],\n.swiper-block[data-v-1c0ff281]{height:100%}.swiper-item[data-v-1c0ff281]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;background:#eee;color:#fff}.swiper-item uni-image[data-v-1c0ff281]{width:100%;height:100%}.slide-ov[data-v-1c0ff281]{\n\t/* position: absolute; */padding:%?40?% 0 0;color:#fff;text-align:center;width:100%;font-size:%?32?%\n\t/* bottom: 50upx; */}",""]),t.exports=e},"85cd":function(t,e,i){"use strict";i.r(e);var n=i("c74e"),a=i("ce0a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f397");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1c0ff281",null,!1,n["a"],s);e["default"]=r.exports},c44e:function(t,e,i){t.exports=i.p+"static/img/logo.f1724dcf.png"},c74e:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"logo"},[n("img",{staticClass:"logo-img",attrs:{src:i("c44e"),alt:""}})]),n("v-uni-view",{staticClass:"block slidebox"},[n("v-uni-view",{staticClass:"swiper-block",class:["spacing-"+t.spacing]},[n("v-uni-swiper",{staticClass:"swiper-box swiper-slide",attrs:{"indicator-dots":!1,autoplay:t.autoplay,circular:!1,interval:"3000",duration:"500","indicator-color":"#E0E0E0","indicator-active-color":"#999"}},t._l(t.swiperList,(function(e,a){return t.swiperleng?n("v-uni-swiper-item",{key:a},[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{staticClass:"slideImg",attrs:{"lazy-load":"true",src:e.original_src?t.sourceUrl+e.original_src:"",mode:"aspectFill"}})],1)],1):n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{staticClass:"slideImg",attrs:{"lazy-load":"true",src:i("3c1c"),mode:"aspectFill"}})],1)],1)})),1)],1)],1),n("v-uni-view",{staticClass:"slide-ov"},[t._v("左右滑动探索更多美好")])],1)},o=[]},ce0a:function(t,e,i){"use strict";i.r(e);var n=i("ec12"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e217:function(t,e,i){t.exports=i.p+"static/img/bg.282beada.jpg"},ec12:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{id:1,autoplay:!1,swiperList:[],swiperleng:0,spacing:"default"}},onLoad:function(t){console.log("onLoad");var e=this;e.id=t.id||1},onShow:function(){console.log("onShow");var t=this;uni.showLoading({title:"加载中..."}),t.getDatas("slideShow")},onReady:function(){console.log("onReady")},onPullDownRefresh:function(){},components:{},computed:{},methods:{getDatas:function(t){var e=this,i={inter:t,parm:"?id="+e.id,fun:function(t){uni.stopPullDownRefresh(),t.success&&(e.swiperList=t.data.info.image,e.swiperleng=t.data.info.image.length),uni.hideLoading()}};e.$store.dispatch("getData",i)}}};e.default=n},f397:function(t,e,i){"use strict";var n=i("f9d9"),a=i.n(n);a.a},f9d9:function(t,e,i){var n=i("5632");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("225ce3f8",n,!0,{sourceMap:!1,shadowMode:!1})}}]);