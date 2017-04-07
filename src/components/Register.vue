<template>
	<div id="Register">
		<router-link to="/home">
			<a  class="login-a">
				<img src="../assets/img/login-1.png" />
			</a>
		</router-link>
		<section class="login-div">
			<router-link to="/login">
				<a href="#" class="login-zhuce">
					<span>登录</span>
				</a>
			</router-link>
			<span class="dot">.</span>
			<a href="#" class="login-denglu">
				<span>注册</span>
			</a>
			<!--账号-->
			<div class="login-div-text1">
				<i class="fa fa-user"></i>&nbsp;&nbsp;
				<input type="text" name="" class="login-text" placeholder="你的昵称" />
			</div>
			<div class="login-div-text3">
				<i class="fa fa-yoast"></i>&nbsp;&nbsp;
				<input type="text" name="" class="login-text" placeholder="手机号" />
			</div>
			<!--密码-->
			<div class="login-div-text2">
				<i class="fa fa-lock"></i>&nbsp;&nbsp;
				<input type="password" name="" class="login-password" placeholder="设置密码" />
			</div>
			<a href="javascript:void(0);" class="hah">
				<div class="login-bottom">
					<span>注册</span>
				</div>
			</a>
				<div>点击 “注册” 即表示您同意并愿意遵守简书</div> 
				<br/>
				<div><span class="register-font">用户协议</span> 和 <span class="register-font">隐私政策</span> 。 </div>
			<hr class="hr1" />
			<span class="login-font ">社交账号直接注册</span>
			<hr class="hr2" />
			<div class="login-ul">
				<ul>
					<li><i class="fa fa-qq fa-2x"></i></li>
					<li><i class="fa fa-weixin fa-2x"></i></li>
					<li><i class="fa fa-weibo fa-2x"></i></li>
					<!--<li @click='show()' ><i  :class="zong">{{font}}</i></li>-->
				</ul>
			</div>

		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="less" scoped>
.register-font{
	color: #3194D0;
	cursor: pointer;
	
}

	#Register {
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
			width: 80px;
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
			.login-div-text3 {
				height: 50px;
				padding: 10px 0;
				border: 1.5px solid #C8C8C8;
				/*margin-top: 50px;*/
				border-top: 0;
				/*border-top-left-radius: 4px;*/
				/*border-top-right-radius: 4px;*/
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
			/*登录按钮*/
			.login-bottom {
				background: #42c02e;
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
					background: #3DB922;
				}
			}
			.login-ul {
				margin: 10px;
				height: 100px;
				width: 100%;
				/*background: bisque;*/
				margin-top: 75px;
    margin-left: 88px;
    margin-bottom: -10px;
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
						&:nth-child(3) {
							background: #E05244;
						}
					}
				}
			}
		}
	}
</style>