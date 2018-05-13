<template>
	<div class="tel-login">
		<form @submit.prevent = "login">		
			<input type="text" v-model = "username" placeholder="手机/邮箱/用户名" />
			<input type="password" v-model = "password" placeholder="密码"/>
			<button type="submit">登陆</button>
		</form>
	</div>
</template>


<script type="text/javascript">
import { Toast } from 'mint-ui';
	export default{
		name : 'TelLogin',
		data (){
			return {
				username: '', 
				password: ''
			}
		},
		methods : {
			login(){
				//解构赋值
				let {username, password} = this;
				let params = { username, password,callback:(result) =>{
					if(result) {
						Toast ({
							message : '登录成功', duration : 1000
						});
						setTimeout(()=>{
							this.$router.replace({name:'mine'})
						},1000)
						
					}else{
						Toast({
							message : '登录失败', duration : 1000
						})
					}
				}}
				//调用actions的方法
				this.$store.dispatch('login',params);
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.tel-login{
		form{
			width: 6rem;			
			margin:0 auto;
			input{
				width:100%;
				height:1rem;
				padding-left: 0.2rem;
				border:1px solid #F0F0F0;
				margin: 0.3rem 0;
			}
			button{
				width:100%;
				height:1rem;
				border:1px solid #fff;
				margin: 0.3rem 0;
				background:#4CD96F;
				color:#fff;
				font-size:18px;
			}
		}
	}
</style>