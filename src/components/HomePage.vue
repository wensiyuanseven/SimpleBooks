<template>
	<div id="HomePage">
		<div class="block">
			<el-row :gutter="20">
				<el-col :span="16">
					<div class="grid-content bg-purple ">
						<!--轮播图-->
						<div class="lunbotu animated zoomIn">
							<span class="demonstration"></span>
							<el-carousel trigger="click" height="274px">
								<!--:key:id 仅仅是为了提高循环的性能   冒号是v-bind的简写 -->
								<el-carousel-item v-for="item in list" :key="item.id">
									<img :src="item" />
								</el-carousel-item>
							</el-carousel>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple " id="replacePicture">
						<!--垂直轮播图-->
						<div class="div-img1 animated zoomIn">
							<md-card>
								<md-card-media>
									<swiper :options="swiperOption">
										<swiper-slide><img src="../assets/img/w1.jpg" class="swiper-img" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w2.jpg" class="swiper-img" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w3.jpg" class="swiper-img" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w4.jpg" class="swiper-img" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w5.jpg" class="swiper-img" /></swiper-slide>
										<div class="swiper-pagination" slot="pagination"></div>
									</swiper>
								</md-card-media>
							</md-card>
						</div>
						<div class="div-img1 animated zoomIn">
							<md-card>
								<md-card-media>
									<swiper :options="swiperOption">
										<swiper-slide><img src="../assets/img/w3.jpg" class=" swiper-img2" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w5.jpg" class=" swiper-img2" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w6.jpg" class=" swiper-img2" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w4.jpg" class=" swiper-img2" /></swiper-slide>
										<swiper-slide><img src="../assets/img/w2.jpg" class=" swiper-img2" /></swiper-slide>
										<!--<div class="swiper-pagination" slot="pagination"></div>-->
									</swiper>
								</md-card-media>
							</md-card>
						</div>

					</div>
				</el-col>
			</el-row>
			<section>
				<el-row :gutter="20">
					<el-col :span="16">
						<!--标签左中部-->
						<div class="tag-left">
							<a href="javascript:void(0);"><img src="../assets/img/07.jpg" />
								<div>&nbsp;&nbsp;旅行-在路上&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0);"><img src="../assets/img/08.jpg" />
								<div>&nbsp;&nbsp;社会热点&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0);"><img src="../assets/img/09.jpg" />
								<div>&nbsp;&nbsp;人物&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0);" class="inter"><img src="../assets/img/10.jpg" />
								<div>&nbsp;&nbsp;@IT-互联网&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0);"><img src="../assets/img/11.jpg" />
								<div>&nbsp;&nbsp;散文&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0);"><img src="../assets/img/12.jpg" />
								<div>&nbsp;&nbsp;哲思&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0);"><img src="../assets/img/13.jpg" />
								<div>&nbsp;&nbsp;语言-翻译&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0);"><img src="../assets/img/14.jpg" />
								<div>&nbsp;&nbsp;财经-投资-理财&nbsp;&nbsp;</div>
							</a>
							<a href="javascript:void(0)" class="zhuanti"><span>更多热门专题&nbsp;＞</span></a>
						</div>

						<!--标签左下部开始-->

						<!--<section class="tag-left-bottom" v-for="(val,index) in seller.content" v-show="a">-->
						<!--计算属性-->
						<section class="tag-left-bottom animated pulse" v-for="(val,index) in filterlist" :key="index">

							<div class="tag-left-bottom-content">
								<a href="javascript:void(0);">
									<img :src="val.head" alt="tag-photo" />
									<span class="span1">{{val.name}}</span>
								</a>
								<em class="time">{{val.time}}</em>
								<a href="javascript:void(0)" class="a-h1">

									<!--注意：如果有字符串连接 需要加：-->
									<router-link :to=" '/detail/'+val.id">
										<h1>{{val.title}}</h1>
									</router-link>

								</a>
								<p class="p-font">{{val.description}}</p>
								<a href="javascript:void(0);">
									<span class="xiangfa">{{val.tab}}</span>
									<span class="tag-tubiao">
	  									<i class="fa fa-eye"></i><em>{{val.look}}</em>
	  									<i class="fa fa-commenting"></i><em>{{val.words}}</em>
	  									<i class="fa fa-heart"></i><em>{{val.like}}</em>
	  								</span>
								</a>
							</div>
							<div class="tag-left-bottom-img-div">
								<img :src="val.picture" class="tag-left-bottom-img" />
							</div>
						</section>
						<!--标签左下部结束-->
						<!--加载更多-->
						<!--if else-->
						<section class="tagloading " @click="agg()" v-if="this.size<20">{{more}}</section>
						<section class="tagloading animated wobble" @click="agg()" v-else>{{end}}</section>

						<!--<section class="tagloading  animated zoomIn" @click="showAll = !showAll"">{{word}}</section>-->

						<!--最底部-->
						<section class="last-bottom">
							<ul>
								<li>
									<a href="javascript:void(0)">关于简书</a>
								</li>
								<li>
									<a href="javascript:void(0)">联系我们</a>
								</li>
								<li>
									<a href="javascript:void(0)">加入我们</a>
								</li>
								<li>
									<a href="javascript:void(0)">作者成书计划</a>
								</li>
								<li>
									<a href="javascript:void(0)">帮助中心</a>
								</li>
								<li>
									<a href="javascript:void(0)">合作伙伴</a>
								</li>
							</ul>
						</section>
						<p class="bottom-p">©2012-2017 上海佰集信息科技有限公司 / Tel:021-61995350 / 简书 / 沪ICP备11018329号-5 <em>沪公网安备31010602000064号</em></p>
						<a href="javascript:void(0)"><img src="../assets/img/tag03.png" /></a>
					</el-col>

					<el-col :span="8">
						<div class="tag-right">
							<a href="javascript:void(0);"><img src="../assets/img/15.png" alt="" /></a>
							<a href="javascript:void(0)"><img src="../assets/img/16.png" alt="" /></a>
							<a href="javascript:void(0);"><img src="../assets/img/17.png" alt="" /></a>
							<a href="javascript:void(0);" class="a-last"><img src="../assets/img/18.png" /></a>
							<div class="download">
								<a href="javascript:void(0);" class="hah">
									<img src="../assets/img/19.png" />
								</a>
								<a href="javascript:void(0);" class="hah">
									<div id="div10">
										<i class="fa fa-qq"></i>&nbsp;<span>扫码</span>
										<img src="../assets/img/2-3.png" class="saoma animated zoomIn" />
									</div>
								</a>
								<a href="javascript:void(0);" class="hah">
									<div id='div2'>
										<i class="fa fa-android"></i>&nbsp;<span>安卓</span>
									</div>
								</a>
								<a href="javascript:void(0);" class="hah">
									<div id="div3">
										<i class="fa fa-apple"></i>&nbsp;<span>iOS</span>
									</div>
								</a>
							</div>
						</div>

						<section class="right-bottom">
							<div class="right-div">
								<span class="right-em">推荐作者</span>
								<i>1/34</i>
								<a href="javascript:void(0)"><em>&nbsp;<&nbsp;</em><em>&nbsp;>&nbsp;</em></a>
							</div>
							<!--复制开始-->
							<div class="right-div2" v-for="(val,index) in seller.content2">
								<ul>
									<li>
										<a href="javascript:void(0)"><img :src="val.head" /></a>
									</li>

									<li>
										<a href="javascript:void(0)">
											<h3>{{val.name}}</h3></a>
										<span>写了<em>{{val.fontnumber}}</em>字 · <em>{{val.like}}</em>喜欢</span>
									</li>
									<li>
										<a href="javascript:void(0)" class="a-last"><i>+</i><em>关注</em></a>
									</li>
								</ul>
								<div>
								</div>
							</div>
							<!--复制结束-->

							<!--查看更多按钮-->
							<section class="tagloading2">查看全部&nbsp;&nbsp;></section>
						</section>
					</el-col>
				</el-row>
			</section>
		</div>

	</div>
</template>

<script>
	//			import $ from 'jquery'
	//		import    './../assets/js/loadMore.js'
	//		import    './../assets/js/page.js'
	//		import    './../assets/js/replacePicture.js'
	import './../assets/js/loadMore.js'

	var arr = new Array();
	export default {
		//拿数据
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				//垂直轮播图 鼠标滚轮轮播
				swiperOption: {
					pagination: '.swiper-pagination',
					direction: 'vertical',
					autoplay: 4000,
					slidesPerView: 1,
					paginationClickable: true,
					spaceBetween: 30,
					mousewheelControl: true

				},
				//循环轮播图 需要补全路径
				list: ["//upload.jianshu.io/admin_banners/web_images/2923/af9167bb9fbd44f83de93c409e82445ef0e56b5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540", "http://upload.jianshu.io/admin_banners/web_images/2866/37e59f3c113298f8f6cc3888d0396738e4477807.jpg", "http://upload.jianshu.io/admin_banners/web_images/2863/18f5e4e14cbeea4b3fb49d29ff81c3f61a347c35.jpg"],
				showAll: true, //标记数据是否需要完全显示的属性  计算属性 
				size: 5,
				more: "加载更多",
				end: "亲 已加载完,没有了"
			}
		},
		mounted() {},
		computed: {
			filterlist: function() {
				var num = this.size;
				return this.seller.content.filter(function(number) {
					return number.id < num
				})
			},
			//对数据进行按需加载   注意:要return
			//			showList:function(){
			//				if(this.showAll==false){   //当数据不需要显示的时候
			//					if(this.seller.content.length>5) {    //先显示前五个
			//							var showList=[];         //定义一个空数组
			//						for(var i=0; i<5; i++){
			//								showList.push(this.seller.content[i]);
			//						}
			//					}else{  //如果小于三就全部显示
			//						 showList=this.seller.content;
			//					}
			//					return showList;
			//				}else if (this.showAll==true){
			//					//如果true 把数据全部显示
			//				return  this.seller.content;     //把数据返回出去
			//				}
			//		},

			word: function() {
				if(this.showAll == false) {
					this.size += 5;
					return "加载完毕";
				} else {
					return "加载更多"
				}
			}
		},
		methods: {
			agg: function() {
				this.size += 5;
				//              console.log(this.size+=5;)
			}
			//			show:function(){
			//				console.log(this.seller.content.length);
			//			}
			//			show:function(){
			//				//把数据存储到数组中
			//				arr[0]=this.seller.content;
			//				console.log(arr[0]);
			//				//循环数据
			//				for(var i=0;i<arr[0].length-12;i++){
			//					//循环出前四个数据
			//					
			//					console.log(arr[0][i]);
			//					document.write(arr[0][i].id+"  "+arr[0][i].id+"  "+arr[0][i].tab+"  "+arr[0][i].name+"  "+arr[0][i].title+"  "+arr[0][i].id+"  "+arr[0][i].id+"  ");
			//					
			//					
			//					
			//				}
			//				
			//				}
		}

	}
</script>

<style scoped lang="less">
	/*@import url("../assets/css/page.css");*/
	/*@import url("../assets/css/replacePicture.less");*/
	
	#replacePicture {}
	
	.div-img1 {
		width: 320px;
		height: 137px;
		margin-left: -28px;
	}
	
	.swiper-pagination {
		.swiper-pagination-bullet {
			background: red;
		}
	}
	
	.swiper-img {
		width: 325px;
		height: 138px;
	
	}
	.swiper-img2{
		border-radius: 6px;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
		width: 325px;
		height: 138px;
		
	}
	
	.tagloading2 {
		width: 100%;
		height: 35px;
		border-radius: 4px;
		color: #787878;
		margin-top: 30px;
		background-color: #f7f7f7;
		border: 1px solid #dcdcdc;
		font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
		margin-left: 5px;
		text-align: center;
		line-height: 40px;
		font-size: 15px;
		cursor: pointer;
		/*font-family: "微软雅黑";*/
		&:hover {
			background: #CCCCCC;
		}
	}
	
	.right-bottom {
		height: 1800px;
		width: 100%;
		margin-top: 30px;
		/*background:#D3DCE6;*/
		font-family: "微软雅黑";
		color: #787878;
		.wen1 {
			width: 100%;
			height: 400px;
			background: burlywood;
		}
		.right-div2 {
			width: 100%;
			height: 50px;
			margin-top: 20px;
			margin-left: 5px;
			/*background: bisque;*/
			ul {
				li {
					float: left;
					margin-right: 28px;
					margin-left: 20px;
					span {
						color: #787878;
					}
					&:first-child {
						margin-right: 0px;
						margin-left: 0px;
					}
					&:last-child {
						float: right;
						margin-right: 10px;
					}
					.a-last {
						display: inline-block;
					}
					a {
						text-decoration: none;
						h3 {
							font-size: 15px;
							color: #373b47;
							margin-top: 10px;
							margin-bottom: 8px;
						}
						img {
							width: 46px;
							height: 46px;
							border-radius: 50%;
						}
						i {
							font-size: 15px;
						}
						span {
							font-style: oblique;
						}
						&:last-child {
							padding-top: 20px;
							font-size: 13px;
							color: #42c021;
						}
					}
				}
			}
		}
		.right-div {
			display: inline-block;
			span {
				margin-left: 0;
				margin-right: 100px;
				font-size: 15px;
				/*background: brown;*/
			}
			i {
				margin-left: 46px;
				font-size: 13px;
			}
			a {
				float: right;
				text-decoration: none;
				margin-left: 10px;
				color: #787878;
				em {
					font-size: 15px;
					border: 1px solid #787878;
					line-height: 15px;
					text-align: center;
					/*border-bottom-right-radius: 4px;*/
					background: white;
					&:first-child {
						border-bottom-left-radius: 4px;
						border-top-left-radius: 4px;
						border-right: 0px;
					}
					&:last-child {
						border-bottom-right-radius: 4px;
						border-top-right-radius: 4px;
					}
				}
			}
		}
	}
	
	.bottom-p {
		color: #9c9c9c;
		margin-left: -10px;
		margin-top: 10px;
		white-space: nowrap;
		em {
			&:hover {
				cursor: pointer;
				color: #000000;
			}
		}
	}
	
	.last-bottom {
		width: 100%;
		height: 30px;
		/*background:#B5B5C5;*/
		margin-left: -10px;
		margin-top: 88px;
		ul {
			li {
				display: inline-block;
				margin-right: 10px;
				font-family: "微软雅黑";
				font-size: 14px;
				float: left;
				line-height: 30px;
				a {
					color: #787878;
					text-decoration: none;
					&:hover {
						color: #000000;
					}
				}
			}
		}
	}
	
	.tagloading {
		width: 100%;
		height: 40px;
		border-radius: 4px;
		color: white;
		margin-top: 30px;
		background: #9c9c9c;
		margin-left: -10px;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		cursor: pointer;
		font-family: "微软雅黑";
		&:hover {
			background: #787878;
		}
	}
	
	.tag-left-bottom {
		width: 100%;
		height: 212px;
		font-size: 1.4rem;
		/*background: burlywood;*/
		margin-left: -10px;
		border-bottom: 1.5px solid #F0F0F0;
		.tag-left-bottom-content {
			font-family: "微软雅黑";
			float: left;
			width: 450px;
			margin-top: 20px;
			.time {
				display: block;
				margin-left: 124px;
				margin-top: -14px;
				color: #969696;
			}
			.p-font {
				text-indent: 20px;
				line-height: 21px;
			}
			a {
				display: block;
				text-decoration: none;
				img {
					width: 34px;
					height: 34px;
					border-radius: 50%;
				}
				.span1 {
					display: block;
					color: black;
					margin-left: 42px;
					margin-top: -25px;
				}
				h1 {
					margin-left: 0px;
					margin-top: 22px;
					margin-bottom: 12px;
					color: #000000;
					/*超出的文字以省略号显示*/
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					&:hover {
						text-decoration: underline;
						background: #CCCCCC;
					}
				}
				.xiangfa {
					display: inline-block;
					/*width: 50px;*/
					padding: 0 5px;
					height: 20px;
					border-radius: 4px;
					margin-top: 11px;
					line-height: 20px;
					text-align: center;
					color: #ec6149;
					background-color: white;
					border: 1px solid;
					border-color: #ec6149;
					&:hover {
						background-color: #fef7f6
					}
				}
				.tag-tubiao {
					display: inline-block;
					margin-left: 20px;
					margin-top: 20px;
					color: #868686;
					i {
						margin-right: 7px;
						&:hover {
							color: black;
						}
					}
					em {
						margin-right: 10px;
						&:hover {
							color: black;
						}
					}
				}
			}
		}
		.tag-left-bottom-img-div {
			float: right;
			.tag-left-bottom-img {
				width: 148px;
				height: 122px;
				margin-top: 40px;
				border-radius: 4px;
				cursor: pointer;
			}
		}
	}
	
	.tag-left {
		margin-top: 40px;
		margin-left: -10px;
		/*background: #D3DCE6;*/
		height: 147px;
		width: 100%;
		border-bottom: 1.5px solid #F0F0F0;
		/*font-size: 1.3rem;*/
		a {
			float: left;
			display: inline-block;
			margin: 0 22px 22px 10px;
			min-height: 32px;
			background-color: #f7f7f7;
			border: 1px solid #dcdcdc;
			border-radius: 4px;
			vertical-align: top;
			overflow: hidden;
			img {
				float: left;
				width: 32px;
				height: 32px;
			}
			div {
				color: #2F2F2F;
				font-family: "微软雅黑";
				/*font-style:solid;*/
				/*font-weight: 200px;*/
				float: right;
				line-height: 32px;
				font-size: 15px;
			}
		}
		.inter {
			/*margin-right: 30px;*/
		}
		.zhuanti {
			/*background: blueviolet;*/
			min-height: 15px;
			margin: 0;
			border: 0;
			background: none;
			padding-left: 8px;
			text-align: center;
			font-size: 1.5rem;
			color: #787878;
			display: inline-block;
			font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
		}
	}
	/*给字体加个边距让它折行*/
	
	.tag-right {
		width: 100%;
		height: 420px;
		/*background:#D3DCE6;*/
		margin-top: 35px;
		/*margin-left: 18px;*/
		/*/*padding-left: 0px;
    padding-right: 0px;*/
		/*position: absolute;*/
		/*border:1px solid green;*/
		a {
			display: inline-block;
			margin-top: 12px;
			/*float:right;*/
			&:first-child {
				margin-top: 0px;
			}
			&:last-child {
				/*float: right;
   			display: block;*/
			}
			img {
				width: 100%;
			}
		}
		.a-last {
			margin-bottom: 15px;
		}
		.download {
			width: 100%;
			a {
				/*position: relative;*/
				display: inline-block;
				text-decoration: none;
				&:first-child {
					/*background: url(../assets/img/19.png);*/
					height: 150px;
					width: 100%;
				}
				div {
					width: 78px;
					height: 38px;
					background: burlywood;
					border-radius: 4px;
					line-height: 38px;
					font-size: 1.7rem;
					text-align: center;
					color: #FFFFFF;
					position: relative;
				}
				#div10 {
					background: #A5A5A5;
					top: -70px;
					left: 15px;
					position: relative;
					&:hover {
						.saoma {
							display: block;
						}
					}
					.saoma {
						display: none;
						position: absolute;
						left: -43px;
						top: -154px;
						width: 155px;
						height: 155px;
					}
				}
				#div2 {
					background: #8BC453;
					top: -70px;
					left: 25px;
					&:hover {
						background: #7CAF49;
					}
				}
				#div3 {
					background: #6DACF4;
					top: -70px;
					left: 35px;
					&:hover {
						background: #6BA1E0;
					}
				}
			}
		}
	}
	/*轮播图*/
	
	.lunbotu {
		overflow: hidden;
		/*margin-left: -30px;*/
		/*height: 274px;*/
		border-bottom-left-radius: 0.7em;
		img {
			overflow: hidden;
			height: 274px;
			width: 600px;
			border-bottom-left-radius: 0.7em;
		}
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	/*绝对定位*/
	
	.block {
		z-index: -999;
		position: absolute;
		top: 56px;
		left: 300px;
		height: 274px;
		/*background: blanchedalmond;*/
		width: 920px;
		border-bottom-right-radius: 0.7em;
		border-bottom-left-radius: 0.7em;
	}
	/*布局*/
	
	.el-row {
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.grid-content {
		min-height: 274px;
		padding-left: 0px;
		margin-left: 0px;
		padding-right: 0px;
		border-radius: 6px;
	}
</style>