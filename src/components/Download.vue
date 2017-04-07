<template>
	<div id="Download">
		<img src="../assets/img/2-1.png" />
		<section class="download-top">
			<img src="../assets/img/2-2.png" class="img1" />
			<div class="biaoyu">
				<h3>源于创作&nbsp;,&nbsp;不止遇见</h3>
				<h6>一个优质原创内容社区</h6>
			</div>
			<a href="javascript:void(0);" class="hah">
				<div id='div1'>
					<i class="fa fa-android"></i>&nbsp;&nbsp;<span>Android</span>
				</div>
			</a>
			<a href="javascript:void(0);" class="hah">
				<div id="div2">
					<i class="fa fa-apple"></i>&nbsp;&nbsp;<span>iOS</span>
				</div>
			</a>
			<div class="erweima">
				<img src="../assets/img/2-3.png" alt="二维码" />
				<div>扫码下载</div>
			</div>
			<img src="../assets/img/2-4.png" class="phone-img" />
		</section>
		<section class="download-middle">
			<img src="../assets/img/2-5.png" class="img-middle" />
			<div class="font-middle">
				<h3>轻松创作精美图文</h3>
				<h6>简单优雅的设计，可以一次上传多张图片、实时保存、<br/>多端同步，使内容分享更方便快捷</h6>
			</div>
		</section>
		<section class="download-middle-2">
			<div class="font-middle-2">
				<h3>多元化的内容社区</h3>
				<h6>简书内容包罗万象，既有第一时间各种新闻事件评<br/>论，又涵盖所有领域的实用信息</h6>
			</div>
			<img src="../assets/img/2-6.png" class="img-middle-2" />
		</section>
		<section class="download-middle-3">
			<img src="../assets/img/2-7.png" class="img-middle-3" />
			<div class="font-middle-3">
				<h3>众多原创作者、内容</h3>
				<h6>在简书，仍有数百万作者在坚持产出优质内容，有数<br/>千万读者在用心阅读优质内容；众多原创作者和内容<br/>只在简书看得到</h6>
			</div>
		</section>
		<section class="download-middle-4">
			<div class="font-middle-4">
				<h3>自由地交流和沟通</h3>
				<h6>你可以对文章发表评论、沟通想法。觉得不够？还能<br/>给作者发简信，和无数传遍中文互联网的热文作者直<br/>接交流</h6>
			</div>
			<img src="../assets/img/2-8.png" class="img-middle-4" />
		</section>
		<img src="../assets/img/2-9.png" class="img-bottom" />
		<img src="../assets/img/2-10.png" class="img-bottom-2"/>

		<section class="download-middle-5">
			<div class="font-middle-5">
				<h3>欢迎你，我们的新朋友</h3>
				<h6>入驻简书，和我们一起阅读、写作、交流...</h6>
			</div>
			<a href="javascript:void(0);" class="hah">
				<div id='div1'>
					<i class="fa fa-android"></i>&nbsp;&nbsp;<span>Android</span>
				</div>
			</a>
			<a href="javascript:void(0);" class="hah">
				<div id="div2">
					<i class="fa fa-apple"></i>&nbsp;&nbsp;<span>iOS</span>
				</div>
			</a>
			<a href="javascript:void(0);" class="hah">
				<div id="div3">
					<span>扫码下载</span>
				</div>
					<img src="../assets/img/2-3.png" alt="二维码" class="erweima-bottom" />
			</a>
		</section>
			
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	#Download {
		position: absolute;
		/*position: relative;*/
		width: 100%;
		height: 100%;
		top: 56px;
		z-index: -999;
		/*background: lightblue;*/
		/*color: #FFFFFF;*/
		img {
			position: relative;
			overflow: hidden;
			top: 220px;
			vertical-align: middle;
			bottom: 0;
			width: 100%;
			/*主要*/
			z-index: 1;
		}
		/*background: lightblue;*/
		.download-top {
			position: relative;
			left: 300px;
			top: -328px;
			height: 616px;
			width: 920px;
			/*background: blanchedalmond;*/
			.img1 {
				top: 62px;
				left: 40px;
				width: 120px;
				height: 120px;
				background: #fff;
				border-radius: 25px;
			}
			.biaoyu {
				position: relative;
				/*z-index: 10;*/
				/*background: blueviolet;*/
				/*top: -40px;
				left: 170px;*/
				left: 185px;
				top: -40px;
				width: 270px;
				height: 92px;
				h3 {
					display: block;
					line-height: 60px;
					font-size: 25px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
				h6 {
					display: block;
					line-height: 20px;
					font-size: 17px;
					font-weight: 300;
					font-family: "微软雅黑";
				}
			}
			a {
				z-index: 10;
				position: relative;
				top: 100px;
				left: 20px;
				display: inline-block;
				text-decoration: none;
				&:first-child {
					/*background: url(../assets/img/19.png);*/
					height: 150px;
					width: 100%;
				}
				div {
					width: 176px;
					height: 50px;
					background: burlywood;
					border-radius: 6px;
					line-height: 50px;
					font-size: 1.8rem;
					text-align: center;
					color: #FFFFFF;
					position: relative;
					i {
						font-size: 1.8rem;
					}
				}
				#div1 {
					font-weight: 400;
					background: #8BC453;
					top: -70px;
					left: 25px;
					&:hover {
						background: #7CAF49;
					}
				}
				#div2 {
					background: #6DACF4;
					top: -7px;
					left: -155px;
					&:hover {
						background: #6BA1E0;
					}
				}
			}
			.erweima {
				img {
					width: 100px;
					height: 100px;
					top: -21px;
					left: 258px;
				}
				div {
					z-index: 100;
					position: relative;
					left: 286px;
					top: -20px;
					color: #787878;
				}
			}
			.phone-img {
				width: 450px;
				height: 540px;
				left: 495px;
				top: -280px;
			}
		}
		/*中间部分 1*/
		.download-middle {
			/*相对定位  相对于#Download*/
			position: relative;
			left: 300px;
			top: -328px;
			height: 365px;
			width: 920px;
			/*background: powderblue;*/
			border-bottom: 1px solid #F0F0F0;
			.img-middle {
				width: 340px;
				height: 264px;
				top: 10px;
			}
			.font-middle {
				position: absolute;
				left: 525px;
				top: 62px;
				h3 {
					font-size: 27px;
					line-height: 100px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
				h6 {
					font-size: 15px;
					line-height: 25px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
			}
		}
		/*中间部分 2*/
		.download-middle-2 {
			/*相对定位  相对于#Download*/
			position: relative;
			left: 300px;
			top: -328px;
			height: 430px;
			width: 920px;
			/*background: powderblue;*/
			border-bottom: 1px solid #F0F0F0;
			.img-middle-2 {
				width: 340px;
				height: 284px;
				left: 525px;
				top: 62px;
			}
			.font-middle-2 {
				position: absolute;
				top: 110px;
				h3 {
					font-size: 27px;
					line-height: 100px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
				h6 {
					font-size: 15px;
					line-height: 25px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
			}
		}
		/*中间部分 3*/
		.download-middle-3 {
			/*相对定位  相对于#Download*/
			position: relative;
			left: 300px;
			top: -328px;
			height: 365px;
			width: 920px;
			/*background: powderblue;*/
			border-bottom: 1px solid #F0F0F0;
			.img-middle-3 {
				width: 340px;
				height: 264px;
				top: 10px;
			}
			.font-middle-3 {
				position: absolute;
				left: 525px;
				top: 62px;
				h3 {
					font-size: 27px;
					line-height: 100px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
				h6 {
					font-size: 15px;
					line-height: 25px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
			}
		}
		/*中间部分 4*/
		.download-middle-4 {
			/*相对定位  相对于#Download*/
			position: relative;
			left: 300px;
			top: -328px;
			height: 430px;
			width: 920px;
			/*background: powderblue;*/
			/*border-bottom: 1px solid #F0F0F0 ;*/
			.img-middle-4 {
				width: 340px;
				height: 284px;
				left: 525px;
				top: 62px;
			}
			.font-middle-4 {
				position: absolute;
				top: 110px;
				h3 {
					font-size: 27px;
					line-height: 100px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
				h6 {
					font-size: 15px;
					line-height: 25px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
			}
		}
		.img-bottom {
			top: -328px;
		}
		/*这个是最底部的图片*/
		.img-bottom-2{
			top: -65px;
			width: 100%;
			/*主要*/
			/*width: 146px;*/
		}
		/*中间部分 5*/
		.download-middle-5 {
			/*相对定位  相对于#Download*/
			position: relative;
			left: 300px;
			top: -545px;
			height: 365px;
			width: 920px;
			/*background: powderblue;*/
			/*border-bottom: 1px solid #F0F0F0 ;*/
			.font-middle-5 {
				position: absolute;
				left: 296px;
				top: 25px;
				text-align: center;
				h3 {
					font-size: 27px;
					line-height: 80px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
				h6 {
					font-size: 18px;
					line-height: 15px;
					font-weight: 400;
					font-family: "微软雅黑";
				}
			}
			a {
				z-index: 10;
				position: relative;
				top: 100px;
				left: 20px;
				display: inline-block;
				text-decoration: none;
				&:first-child {
					/*background: url(../assets/img/19.png);*/
					height: 150px;
					width: 100%;
				}
				div {
					width: 176px;
					height: 50px;
					background: burlywood;
					border-radius: 6px;
					line-height: 50px;
					font-size: 1.8rem;
					text-align: center;
					color: #FFFFFF;
					position: relative;
					i {
						font-size: 1.8rem;
					}
				}
				#div1 {
					font-weight: 400;
					background: #8BC453;
					top: 55px;
					left: 134px;
					&:hover {
						background: #7CAF49;
					}
				}
				#div2 {
					background: #6DACF4;
					top: 55px;
					left: 175px;
					&:hover {
						background: #6BA1E0;
					}
				}
				#div3 {
					width: 120px;
					height: 50px;
					background: #E1E1E1;
					top: 115px;
    				left: 218px;
					color:#787878;
					font-size: 22px;
    				vertical-align: middle;
    				font-family: "微软雅黑";
    				border-bottom-right-radius:0;	
    				border-top-right-radius:0;	
				}
			}
			.erweima-bottom{
					width: 80px;
					height: 80px;
					top: 49px;
    				left: 340px;
				
			}
		}
		
	}
</style>