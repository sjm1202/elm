
<template>
	<div class="login">
		<div class="img-box">
			<img src="/static/img/elm.jpg" alt="">
		</div>
		<div class="login-nav">
			<ul>
				<li 
					v-for="(nav, index) in navs" 
					:key="nav.id"
					:class="{active: index == activeIndex }"
					@touchstart="changeActiveIndex( index )">  
					{{nav.tit}}
				</li>
			</ul>			
		</div>
		<tel-login></tel-login>
	</div>
</template>
<script type="text/javascript">
import TelLogin from './TelLogin'
	export default{
		name : "name",
		components : { TelLogin },
		data (){
			return {
				navs : [
					{id:1, tit:'短信验证'},
					{id:2, tit:'密码登录'}
				],
				activeIndex: 0
			}
		},
		methods: {
			changeActiveIndex( index ){
				this.activeIndex = index;
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.login{
		.img-box{
			width: 100%;
			height:2.8rem;
			img{
				width:100%;
				height:100%;
			}
		}
		.login-nav{
			width:100%;
			height:1.2rem;
			line-height: 0.7rem;
			ul{
				display:flex;
				justify-content:space-around;
				font-size:14px;
				font-weight:bolder;
				li:first-of-type{
					margin-left: 1rem;
				}
				li:last-of-type{
					margin-right: 1rem;
				}
				.active{				
					border-bottom:2px solid #0592ff;
					color:#0592ff;
				}
			
			}
		}
	}
</style>