<template>
	<section id="Detail">
		<h1>{{goods.title}}</h1>
		<div class="div_block">
			<div class="left_div">
				<a href="javascript:void()"><img :src="goods.head" /></a>
			</div>
			<div class="right_div">
				<div class="top_div">
					<span>{{goods.author}}</span>
					<span>{{goods.name}}</span>
					<span><i>+</i>&nbsp;关注</span>
				</div>
				<div class="button_div">
					<span>{{goods.time}}
						<span class="show animated fadeIn">最后编辑于:2017.03.26 18:11</span>
					</span>
					<span>字数</span>
					<span>{{goods.fontnumber}}</span>
					<span>阅读</span>
					<span>{{goods.red}}</span>
					<span>评论</span>
					<span>{{goods.discuss}}</span>
					<span>喜欢</span>
					<span>{{goods.like}}</span>
				</div>
			</div>
		</div>
		<div class="font_div">
			<p>{{goods.p1}}</p>
			<h2>{{goods.h1}}</h2>
			<img :src="goods.picture1" class="img_1" />
			<div class="img_resource"><span>图片来源于&nbsp;{{goods.source1}}</span></div>
			<i class="line"></i>
			<p>{{goods.p2}}</p>
			<h2>{{goods.h2}}</h2>
			<img :src="goods.picture2" class="img_2" />
			<div class="img_resource"><span>图片来源于&nbsp;{{goods.source2}}</span></div>
			<p>{{goods.p3}}</p>
			<h3>{{goods.h3}}</h3>
			<p>{{goods.p1}}</p>
			<a href="javascript:void()">{{goods.link1}}</a>
			<a href="javascript:void()">{{goods.link2}}</a>
			<a href="javascript:void()">{{goods.link3}}</a>
		</div>
		<div class="last_div">
			<span><i class="fa fa-file-text">&nbsp;</i>{{goods.tab}}</span>
			<span>@著作权归作者所有
					<span class="span_init animated fadeIn">转载请联系作者获得授权，并标注“简书作者”</span>
			</span>
			<span>举报文章</span>
		</div>
		<div class="div_block-last">
			<div class="div_block-last1">
				<div class="last-left"><img :src='goods.head' /></div>
				<div class="last-center">
					<span>{{goods.name}}</span>
					<span>写了 {{goods.fontnumber}} 字，被 {{goods.red}} 人关注，获得了 {{goods.like}} 个喜欢</span>
				</div>
				<div class="last-right">
					<span><i>+</i>&nbsp;关注</span>
				</div>
			</div>
			<div class="div_block-last2">
				<p>{{goods.name}}&nbsp;{{goods.tab2}}</p>
			</div>
		</div>
		<div class="last-h2">
			<h2>{{goods.last}}</h2>
			<div class="zanshang"><span>赞赏支持</span></div>
			<div class="tupian"><img :src="goods.zanshanghead" /></div>
		</div>
		<div class="bottom_fixed">
			<div class="el-icon-share" id="shareArticle" @click="show()">
				<!--点击出现-->
				<div v-if="a" id="clickShare" class="animated rollIn">
					<ul>
						<li><i class="fa fa-weixin" id="fa1"></i>&nbsp;分享到&nbsp;微信</li>
						<li><i class="fa fa-weibo" id="fa2"></i>&nbsp;分享到&nbsp;微博</li>
						<li><i class="fa fa-file" id="fa3"></i>&nbsp;长按下载微博图片</li>
						<li><i class="fa fa-qq" id="fa4"></i>&nbsp;分享到&nbsp;QQ空间</li>
						<li><i class="fa fa-twitter-square" id="fa5"></i>&nbsp;分享到&nbsp;Twitter</li>
						<li><i class="fa fa-facebook-official" id="fa6"></i>&nbsp;分享到&nbsp;Facebook</li>
						<li><i class="fa fa-github-square" id="fa7"></i>&nbsp;分享到&nbsp;github</li>
						<li><i class="fa fa-html5" id="fa8"></i>&nbsp;分享到&nbsp;HTML5</li>
					</ul>
				</div>
				<div v-else ></div>
				<span class="share animated zoomInLeft">分享文章
			</span>
			</div>

		</div>
	</section>
</template>

<script>
	//引入图片放大插件插件
	import './../assets/js/jquery-3.1.1.js'
	import './../assets/js/zoomify.js'
	import './../assets/js/photobig.js'
	//点击js
	//	import js from './../assets/js/clickAa.js'

	const ERR_Ok = 0;
	export default {
		mounted() {
			this.fetchData(this.$route.params.id);
			console.log("获取此篇文章的id为" + this.$route.params.id);
		},
		methods: {
			fetchData: function(id) {
				this.$http.get('/api/goods', []).then(function(res) {
					res = res.body;
					if(res.errno === ERR_Ok) {
						//						console.log(res.data[id-1]);
						//文章页面的id是从1开始的 而详情页面的id是从0开始的
						this.goods = res.data[id - 1];
					}
				}, function(res) {
					console.log(res.status);
				});
			},
			show: function() {
				if(this.a == true) {
					this.a = false
				} else {
					this.a = true;
				}
			}
		},
		data() {
			return {
				goods: [],
				a: false
			}
		},

	}
</script>

<style scoped="scoped" lang="less">
	/*引入图片放大的css*/
	
	@import url("../assets/css/zoomify.css");
	#Detail {
		z-index: -999;
		position: relative;
		top: 56px;
		left: 310px;
		height: 600px;
		/*background: blanchedalmond;*/
		width: 830px;
		border-bottom-right-radius: 0.7em;
		border-bottom-left-radius: 0.7em;
		font-family: "微软雅黑";
		/*底部固定*/
		.bottom_fixed {
			position: fixed;
			bottom: 94px;
			right: 28.4px;
			background: white;
			border: 1px solid rgba(0, 0, 0, .1);
			border-radius: 3px;
			border-bottom-left-radius: 0px;
			border-bottom-right-radius: 0px;
			line-height: 50px;
			text-align: center;
			text-decoration: none;
			cursor: pointer;
			color: #696969;
			/*点击出现*/
			#clickShare {
				position: absolute;
				height: 252px;
				width: 160px;
				top: -134px;
				/*top: -500px;*/
				left: -180px;
				display: block;
				background-color: #fff;
				border-radius: 6px;
				box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
				border: 1px solid #dcdcdc;
				ul {
					li {
						float: left;
						margin: 8.5px;
						color: #000000;
						font-size: 15px;
						#fa1 {
							color: #07bd2e;
						}
						#fa2 {
							color: #e6e62d;
						}
						#fa3 {
							color: #787878;
						}
						#fa4 {
							color: aquamarine;
						}
						#fa5 {
							color: #00aaec;
						}
						#fa6 {
							color: #4460ad;
						}
						#fa7 {
							color: #f93f2d;
						}
						#fa8 {
							color: crimson;
						}
						i {
							margin-right: 5px;
						}
					}
				}
			}
			.el-icon-share {
				position: relative;
				padding: 19px;
				&:hover {
					.share {
						display: block;
					}
				}
				.share {
					display: none;
					background: #000000;
					width: 75px;
					height: 30px;
					position: absolute;
					line-height: 30px;
					top: 10px;
					color: white;
					left: -86px;
					color: floralwhite;
					font-family: "微软雅黑";
					text-align: center;
					border-radius: 4px;
					font-size: 13px;
				}
			}
		}
		.last-h2 {
			width: 100%;
			/*background: red;*/
			margin-top: 30px;
			clear: both;
			border-bottom: 1px solid #F0F0F0;
			/*background: beige;*/
			height: 220px;
			h2 {
				text-align: center;
				margin: 0 auto;
				margin-left: 60px;
				font-size: 20px;
				font-weight: 100;
			}
			.tupian {
				cursor: pointer;
				margin-top: 30px;
					text-align: center;
					img {
						
						width: 50px;
						height: 50px;
						border-radius: 50%;
					}
				}
			.zanshang {
				background: burlywood;
				width: 100px;
				margin: 0 auto;
				text-align: center;
				margin-top: 40px;
				border-radius: 4px;
				background: #ec6149;
				&:hover {
					background: #E05244;
				}
				span {
					line-height: 40px;
					font-size: 20px;
					color: whitesmoke;
					cursor: pointer;
				}
			}
		}
		.div_block-last {
			width: 830px;
			height: 160px;
			background: #F8F8F8;
			margin: 0 auto;
			margin-top: 60px;
			border-radius: 6px;
			border: 1px solid #E1E1E1;
			.div_block-last1 {
				div {
					margin-top: 20px;
					margin-bottom: 15px;
					img {
						width: 60px;
						height: 60px;
						border-radius: 50%;
					}
					&:first-child {
						float: left;
						margin-left: 30px;
						margin-right: 30px;
					}
					&:nth-child(2) {
						float: left;
						width: 600px;
						/*background: bisque;*/
						color: red;
						span {
							display: block;
							&:first-child {
								font-size: 20px;
								margin-bottom: 20px;
								color: #000000;
							}
							&:last-child {
								font-size: 15px;
								color: #787878;
							}
						}
					}
					&:last-child {
						float: right;
						color: white;
						margin-right: 20px;
						background: #3DB922;
						padding: 4px 6px;
						cursor: pointer;
						font-size: 2.3rem;
						border-radius: 45px;
						i {
							font-weight: bold;
							/*font-size: 1.7rem;*/
						}
						&:hover {
							background: #E05244;
						}
					}
				}
			}
			.div_block-last2 {
				clear: both;
				border-top: 1px solid #E1E1E1;
				width: 700px;
				margin: 0 auto;
				padding-top: 15px;
				p {
					line-height: 25px;
					font-size: 15px;
					color: #787878;
				}
			}
		}
		.last_div {
			width: 100%;
			margin-top: 20px;
			font-size: 1.3rem;
			color: #787878;
			cursor: pointer;
			span {
				&:first-child {
					float: left;
				}
				&:nth-child(2) {
					float: right;
					margin-left: 20px;
					cursor: text;
					position: relative;
					&:hover {
						.span_init {
							display: block;
						}
					}
					.span_init {
						background: #000000;
						height: 20px;
						width: 375px;
						position: absolute;
						top: -38px;
						display: none;
						color: white;
						left: -150px;
						background: #000000;
						height: 20px;
						text-align: center;
						border-radius: 6px;
						font-size: 1.7rem;
						padding: 3px 0;
					}
				}
				&:last-child {
					float: right;
				}
			}
		}
		.font_div {
			text-indent: 50px;
			margin-top: 30px;
			font-size: 1.7rem;
			line-height: 50px;
			h2 {
				font-size: 2.2rem;
			}
			img {
				width: 100%;
			}
			h3 {
				font-size: 1.8rem;
			}
			a {
				display: block;
				font-size: 1.9rem;
				color: #3194d0;
			}
			.img_resource {
				text-indent: 0px;
				margin: 0 auto;
				margin-top: -15px;
				margin-bottom: 20px;
				width: 180px;
				display: block;
				font-size: 1.5rem;
				text-align: center;
				border-bottom: 1px solid #d9d9d9;
				color: #969696;
				span {}
			}
		}
		h1 {
			text-align: center;
			padding-top: 60px;
			font-size: 3.8rem;
			margin-bottom: 40px;
		}
		.div_block {
			/*background: burlywood;*/
			height: 75px;
			width: 490px;
			margin-left: 100px;
			.left_div {
				display: inline-block;
				a {
					img {
						width: 53px;
						height: 53px;
						border-radius: 50%;
						float: left;
					}
				}
			}
			.right_div {
				float: right;
				.top_div {
					margin-bottom: 10px;
					margin-top: 8px;
					span {
						margin-right: 7px;
						&:first-child {
							padding: 1.5px 4px;
							font-size: 1.3rem;
							color: #ea6f5a;
							border: 1px solid #ea6f5a;
							border-radius: 3px;
						}
						&:nth-child(2) {
							font-size: 1.7rem;
							cursor: pointer;
						}
						&:last-child {
							color: white;
							background: #3DB922;
							padding: 2px 6px;
							cursor: pointer;
							font-size: 1.3rem;
							border-radius: 40px;
							i {
								font-weight: bold;
								/*font-size: 1.7rem;*/
							}
							&:hover {
								background: #E05244;
							}
						}
					}
				}
				.button_div {
					font-size: 1.5rem;
					color: #787878;
					span {
						&:first-child {
							/*color: red;*/
							position: relative;
							&:hover {
								.show {
									display: block;
								}
							}
							.show {
								position: absolute;
								display: none;
								color: white;
								top: 28px;
								left: -50px;
								background: #000000;
								height: 20px;
								width: 250px;
								text-align: center;
								border-radius: 6px;
								font-size: 1.7rem;
								padding: 3px 0;
							}
						}
					}
				}
			}
		}
	}
</style>