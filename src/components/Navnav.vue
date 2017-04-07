<template>
	<div id="Navnav" class="animated zoomIn">
		<!--布局-->
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark">
					<nav class="navbar">
						<ul class='daohang' style="position: relative;">
							<router-link to="/home" tag='li'>
								<a class="logo"><img src="../assets/img/05.png" alt="logo"></a>
							</router-link>
							<router-link to="/home" tag='li'>
								<a class="homepage"><i class="el-icon-menu"></i>&nbsp;<span>首页</span></a>
							</router-link>
							<router-link to="/download" tag='li'>
								<a class="download"><i class="fa fa-download"></i>&nbsp;&nbsp;下载App</a>
							</router-link>

							<li class="search wen">
								<form>
									<input type="text" value="" placeholder="搜索" />
									<button class="submit" type="submit"><i class="el-icon-search"></i></button>
								</form>

							</li>
							<!--oncopy = "return false" 禁止复制 onselectstart = "return false"  禁止全选-->
							<em class="Aa" id="clickAa" oncopy = "return false" onselectstart = "return false">Aa</em>
							<div  id="hiddenAa">
								<div>
									<span class="span1"><i class="el-icon-time"></i><em>&nbsp;夜间模式</em></span>
									<span class="span2">开</span>
									<span class="span3">关</span>
								</div>
								<div>
									<span class="span4">宋体</span>
									<span class="span5">黑体</span>
								</div>
								<div>
									<span class="span4">简</span>
									<span class="span5">繁</span>
								</div>
							</div>
							<router-link to="/login" tag='li'>
								<a class="login">登录</a>
							</router-link>
							<router-link to="/register" tag='li'>
								<a class="register">&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;</a>
							</router-link>
						</em>
							<router-link to="/login" tag='li'>
								<!--<div class="articles"><i></i>{{seller.name}}</div>-->
								<a class="writeArticle">&nbsp;&nbsp;<i class="fa fa-pagelines"></i>&nbsp;写文章&nbsp;&nbsp;</a>
							</router-link>
						</ul>
					</nav>
				</div>
			</el-col>
		</el-row>
	<!--引入回滚插件-->
		<div class="actGotop"><a href="javascript:;" title="返回顶部" class="dingwei1">
				<div class="dingwei2 animated zoomIn">回到顶部
				</div>
		</a></div>
	
	</div>
</template>

<script>
	//jquery插件有问题
		import $ from 'jquery'
		import    './../assets/js/回滚插件.js'
	
	//	import './../assets/js/fixed.js'
	//引入点击事件
	import js from './../assets/js/clickAa.js'
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {

			}
		},
		methods: {}

	}
</script>

<style lang="less" scoped="scoped">
@import url("./../assets/css/回滚插件.css");
/*点击Aa显示与隐藏*/
.dingwei1{
	position: relative;
	&:hover{
		.dingwei2{
			display:block;
		}
	}
}
.dingwei2{
	display: none;
	position: absolute;
	width: 75px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	background: black;
	border-radius: 4px;
	font-size: 13px;
	color: floralwhite;
	font-family: "微软雅黑";
	right: 60px;
	top: 10px;
	
}
	#hiddenAa{
		width: 240px;
		height: 220px;
		 display: none;
		 position: absolute;
		 top: 56px;
    	left: 910px;
    	background-color: #fff;
   		border-radius: 4px;
    	box-shadow: 0 2px 8px rgba(0,0,0,.1);
    	div{
    		span{
    			/*display: inline-block;*/
    			height: 80px;
    			line-height: 80px;
    			font-size: 17px;
    			color: #969696;
    			font-weight: 500;
    		}
    		&:first-child{
    		height:80px;
    		width: 100%;
    		/*background:bisque;*/
    		border-bottom: 1px solid rgba(0,0,0,.1);
    		
    		.span1{
    			margin-left: 12px;
    		}
    		.span2{
    			cursor: pointer;
    			
    			border: 1px solid  rgba(0,0,0,.1);
    			/*background: bisque;*/
    			display: inline;
    			/*margin: 20px;*/
    			padding:10px;
    			margin-left: 46px;
    			border-radius: 4px;
    			
    			/*margin-top: 10px;*/
    			border-bottom-right-radius:0px ;
    		border-top-right-radius:0px ;
    		}
    		.span3{
    			cursor: pointer;
    			border: 1px solid  rgba(0,0,0,.1);
    			display: inline;
    			padding:10px;
    			border-radius: 4px;
    			margin-left: -4px;
    			border-bottom-left-radius:0px ;
    		border-top-left-radius:0px ;
    		border-left: 0px;
    		background: #6dacf4;
    		color: white;
    		}
    		}
    		&:nth-child(2){
    			margin-top: 20px;
    			width: 100%;
    			height: 42px;
    			/*background: blanchedalmond;*/
    			span{
    				display: inline;
    				line-height: 42px;
    				border: 1px ;
    				cursor: pointer;
    			border: 1px solid  rgba(0,0,0,.1);
    			padding: 10px 35px;
    			border-radius: 4px;
    			}
    			.span4{
    				margin-left: 14px;
    				border-bottom-right-radius:0px ;
    				border-top-right-radius:0px ;
    			}
    			.span5{
    				margin-left: -4px;
    				border-bottom-left-radius:0px ;
    				border-top-left-radius:0px ;
    				border-left: 0px;
    				background: #6dacf4;
    				color: white;
    			}
    		}
    		&:nth-child(3){
    			margin-top: 15px;
    			width: 100%;
    			height: 42px;
    			/*background: blanchedalmond;*/
    			span{
    				display: inline;
    				line-height: 42px;
    				border: 1px ;
    				cursor: pointer;
    			border: 1px solid  rgba(0,0,0,.1);
    			padding: 9px 44px;
    			border-radius: 4px;
    			}
    			.span4{
    				margin-left: 14px;
    				border-bottom-right-radius:0px ;
    				border-top-right-radius:0px ;
    				background: #6dacf4;
    				color: white;
    			}
    			.span5{
    				margin-left: -4px;
    				border-bottom-left-radius:0px ;
    				border-top-left-radius:0px ;
    				border-left: 0px;
    				
    			}
    		}
    	}
	}
	@media only screen and (max-width: 93em) {
		.writeArticle {
			display: none;
		}
	}
	
	@media only screen and (max-width: 85em) {
		.register {
			display: none;
		}
	}
	
	@media only screen and (max-width: 78em) {
		.login {
			display: none;
		}
	}
	
	@media only screen and (max-width: 73em) {
		.Aa {
			display: none;
		}
	}
	
	.navbar {
		position: fixed;
		height: 56px;
		width: 100%;
		background-color: #fff;
		/*border-color: #f0f0f0;*/
		border-bottom: 1px solid #f0f0f0;
		font-family: block;
		/*background: bisque;*/
		top: 0;
		.daohang {
			/*float: left;*/
			li {
				display: inline-block;
				font-size: 2rem;
				/*margin-left: 10rem;*/
				a {
					text-decoration: none;
				}
			}
			.logo {
				display: inline-block;
				/*height: 100%;*/
				width: 56px;
				padding: 14px 25px 15px 20px;
				/*margin-left: -60px;*/
				margin-left: 60px;
				margin-right: 60px;
				img {
					width: 55px;
					height: 26px;
					vertical-align: middle;
				}
			}
			/*首页*/
			.homepage {
				/*background: darkgoldenrod;*/
				line-height: 55px;
				overflow: hidden;
				padding: 16.5px;
				color: #ea6f5a;
				font-size: 1.8rem;
				margin-left: 90px;
				margin-right: 12px;
				i {
					font-size: 1.6rem;
				}
				&:hover {
					color: #ea6f5a;
					background: none;
				}
			}
			/*下载*/
			.download {
				/*height: 55px;*/
				width: 180px;
				line-height: 55px;
				overflow: hidden;
				padding: 17px;
				padding-bottom: 19px;
				color: #333;
				font-size: 1.8rem;
				margin-left: 12px;
				margin-right: 22.5px;
				position: relative;
				border: none;
				&:hover {
					color: #333;
					background-color: #F5F5F5;
					/*position: absolute;*/
				}
			}
			/*搜索*/
			.search {
				font-size: 1.8rem;
				align-items: center;
				height: 56px;
				form {
					margin-top: 12px;
					background: #EEEEEE;
					height: 20px;
					border: 1px solid #ddd;
					border-radius: 15px;
					padding: 5px;
					input {
						padding: 0 5px;
						border: none;
						font-size: 14px;
						background: #EEEEEE;
						&:focus {
							outline: 0;
							/*输入框获取焦点后，不要有外框线*/
						}
					}
					.submit {
						/* 搜索区域中的按钮*/
						border: none;
						cursor: pointer;
						width: 20px;
						background-size: 15px;
						border-radius: 50%;
						&:focus {
							outline: 0;
							/*输入框获取焦点后，不要有外框线*/
						}
					}
				}
			}
			/*Aa*/
			.Aa {
				/*background: darkgoldenrod;*/
				/*height: 55px;*/
				line-height: 55px;
				overflow: hidden;
				padding: 16.5px;
				color: #969696;
				font-size: 1.8rem;
				margin-left: 280px;
				cursor: pointer;
				&:hover {
					color: #ea6f5a;
					background: none;
				}
			}
			/*登录*/
			.login {
				line-height: 55px;
				overflow: hidden;
				padding: 16.5px;
				color: #969696;
				font-size: 1.8rem;
				/*margin-left: 8px;*/
				margin-right: 12px;
				cursor: pointer;
				&:hover {
					color: #ea6f5a;
					background: none;
				}
			}
			/*注册*/
			.register {
				padding: 9px;
				font-size: 1.8rem;
				line-height: 24px;
				cursor: pointer;
				line-height: 24px;
				margin: 9px 8px 0 15px;
				border: 1px solid rgba(236, 97, 73, .7);
				border-radius: 4px;
				font-size: 15px;
				color: #ea6f5a;
				&:hover {
					color: #ea6f5a;
					background: #FEF7F6;
				}
			}
			/*写文章*/
			.writeArticle {
				/*display: none;*/
				padding: 9px;
				font-size: 1.8rem;
				line-height: 24px;
				cursor: pointer;
				line-height: 24px;
				margin: 9px 8px 0 15px;
				border: 1px solid rgba(236, 97, 73, .7);
				border-radius: 4px;
				font-size: 15px;
				background: #EA6F5A;
				color: #F5F5F5;
				&:hover {
					color: #ea6f5a;
					background: #FEF7F6;
				}
			}
		}
	}
</style>