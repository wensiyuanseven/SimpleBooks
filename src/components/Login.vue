<template>
	<div id="Login">
		<router-link to="/home">
			<a  class="login-a">
				<img src="../assets/img/login-1.png" />
			</a>
		</router-link>
		<section class="login-div">
			<a href="#" class="login-denglu">
				<span>登录</span>
			</a>
			<span class="dot">.</span>
				<router-link to="/register" >
						<a href="#" class="login-zhuce">
				
				<span>注册</span>
			</a>
			</router-link>
			<!--账号-->
			<div class="login-div-text1">
				<i class="fa fa-user"></i>&nbsp;&nbsp;
				<input type="text" name="" class="login-text" placeholder="手机号或邮箱" />
			</div>
			<!--密码-->
			<div class="login-div-text2">
				<i class="fa fa-lock"></i>&nbsp;&nbsp;
				<input type="password" name="" class="login-password" placeholder="密码" />
			</div>
			<div class="login-checkbox">
				<input type="checkbox" checked="checked" />&nbsp;记住我
			</div>
			<span class="question">登录遇到问题？</span>
			<a href="javascript:void(0);" class="hah">
				<div class="login-bottom">
					<span>登录</span>
				</div>
			</a>
			<hr class="hr1" />
			<span class="login-font ">社交账号登录</span>
			<hr class="hr2" />
			<div class="login-ul"  >
				<ul>
					<li><i class="fa fa-qq fa-2x"></i></li>
					<li><i class="fa fa-weixin fa-2x"></i></li>
					<li><i class="fa fa-weibo fa-2x"></i></li>
					<li @click='show()'><i  :class="zong" >{{font}}</i></li>
				</ul>
			</div>

		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				font:'其他',
				zong: {
					red: false
				}
			}
		},
		methods: {
			show: function() {
				this.zong.red=true;
				this.font='豆';
			console.log(this.zong.red)
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	/*vue 添加的class*/
.red {
		color: #FFFFFF;
		background: #00820f;	
		display: inline-block;
		height: 50px;
		width: 50px;
		border-radius:50% ;
		font-size: 20px;
		font-family: "微软雅黑";
	}
	#Login {
		/*background: #6BA1E0;*/
		background: #F1F1F1;
		height: 800px;
		width: 100%;
		.login-a {
			display: inline-block;
			/*background: brown;*/
			margin-top: 54px;
			margin-left: 50px;
		}
		hr {
			background: #B5B5C5;
			width: 100px;
			margin-top: 30px;
		}
		.hr1 {
			float: left;
			margin-left: 20px;
		}
		.hr2 {
			float: right;
			margin-right: 20px;
		}
		.login-font {
			color: #B5B5C5;
			float: left;
			font-size: 15px;
			font-family: "微软雅黑";
			font-weight: 300;
			margin-top: 25px;
			margin-left: 40px;
		}
		/*中间部分*/
		.login-div {
			width: 400px;
			margin: 0 auto;
			background-color: #fff;
			margin-top: -40px;
			padding: 50px 50px 30px;
			border-radius: 4px;
			box-shadow: 0 0 8px rgba(0, 0, 0, .1);
			text-align: center;
			.dot {
				font-weight: 700;
				font-size: 19px;
				font-family: "微软雅黑";
				padding: 10px;
				color: #969696;
			}
			a {
				text-decoration: none;
				font-weight: 600;
				font-size: 22px;
				font-family: "微软雅黑";
				padding: 15px;
			}
			.login-denglu {
				display: inline-block;
				color: #EA6F5A;
				border-bottom: 2px solid #ea6f5a;
			}
			.login-zhuce {
				display: inline-block;
				color: #969696;
				font-weight: 200;
				&:hover {
					border-bottom: 2px solid #ea6f5a;
				}
			}
			.login-div-text1 {
				height: 50px;
				padding: 10px 0;
				border: 1.5px solid #C8C8C8;
				margin-top: 50px;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
				background: #F8F8F8;
				font-size: 20px;
				text-align: center;
				i {
					/*display: inline-block;*/
					color: #969696;
				}
				input {
					font-family: "微软雅黑";
					text-indent: 5px;
					border: 0;
					line-height: 50px;
					background: #F8F8F8;
					outline: none;
				}
			}
			.login-div-text2 {
				padding: 10px 0;
				border: 1.5px solid #C8C8C8;
				border-top: 0;
				height: 50px;
				border-bottom-left-radius: 4px;
				border-bottom-right-radius: 4px;
				background: #F8F8F8;
				font-size: 20px;
				text-align: center;
				i {
					/*display: inline-block;*/
					color: #969696;
				}
				input {
					font-family: "微软雅黑";
					text-indent: 5px;
					border: 0;
					line-height: 50px;
					background: #F8F8F8;
					outline: none;
				}
			}
			.login-checkbox {
				display: inline-block;
				font-size: 20px;
				margin-top: 70px;
				margin-left: -288px;
				color: #969696;
				font-family: "微软雅黑";
			}
			.question {
				cursor: pointer;
				float: right;
				margin-left: 0;
				font-size: 20px;
				margin-top: 69px;
				margin-left: -306px;
				color: #969696;
				font-family: "微软雅黑";
				&:hover {
					color: #000000;
				}
			}
			/*登录按钮*/
			.login-bottom {
				background: #3194D0;
				color: #FFFFFF;
				border-radius: 6px;
				margin: 0 auto;
				margin-top: 35px;
				height: 48px;
				width: 400px;
				text-align: center;
				font-weight: 300;
				font-family: "agency fb";
				span {
					line-height: 48px;
				}
				&:hover {
					background: #187CB7;
				}
			}
			.login-ul {
				margin: 10px;
				height: 100px;
				width: 100%;
				/*background: bisque;*/
				margin-top: 40px;
				margin-left: 59px;
				ul {
					li {
						line-height: 55px;
						text-align: center;
						float: left;
						border-radius: 50%;
						height: 50px;
						width: 50px;
						/*border: 1px solid saddlebrown;*/
						margin: 10px;
						cursor: pointer;
						color: #FFFFFF;
						&:first-child {
							background: #498ad5;
						}
						&:nth-child(2) {
							background: #00BB29;
						}
						&:nth-last-child(2) {
							background: #E05244;
						}
						&:last-child {
							line-height: 50px;
							background: #F0F0F0;
							color: #787878;
							font-family: "微软雅黑";
						}
					}
				}
			}
		}
	}
</style>