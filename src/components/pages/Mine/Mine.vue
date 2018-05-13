<template>
  	<div class="mine">
  		<div class="mine-top">
		   	<div class="mine-title">
		   		<router-link :to="{name:'home'}" tag="span">
					<i class="fa fa-angle-left"></i>
				</router-link>
				<h2>我的</h2>
		   	</div>
		   	<div class="login-box">		   		
	   			<div class="img-box">
		   			<i class="fa fa-user-circle-o"></i>
		   		</div>
	   			
	   			<div class="login-info" v-if="isShow">
	   				<h1>登录/注册</h1>
	   				<p><i class="fa fa-mobile"></i>登陆后享受更多特权</p>
	   			</div>
	   			<div class="login-info" v-else>
	   				<h1>{{userInfo.username}}</h1>
	   				<p><i class="fa fa-mobile"></i><span @click="EXIT">退出</span></p>
	   			</div>

	   			<router-link
			   		tag="div"
					:to = "{name:'login'}"
					 class="arrow">
	   				<i class="fa fa-angle-right"></i>
	   			</router-link>
		   	</div>
		</div>

		<div class="mine-nav">
			<ul>
				<li>
					<i class="fa fa-jpy" style="background:#FF9900"></i>
					<span>钱包</span>
				</li>
				<li>
					<i class="fa fa-archive" style="background:#FF5F3E"></i>
					<span>红包</span>
				</li>
				<li>
					<i class="fa fa-btc" style="background:#6AC20B"></i>
					<span>金币</span>
				</li>
			</ul>
		</div>
		<div class="line"></div>
		<div class="mine-item" color="red">
			<ul>
				<li v-for="item in items" 
					:key="item.id"			
				>
					<i 
						:style="{color : item.color}"					
						:class = "item.cla"></i>
					<span>{{item.tit}}</span>
					<i class="fa fa-angle-right"></i>
				</li>
			</ul>
		</div>
  	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'Mine',
  data (){
  	return {
  		items : [
  			{ id : 1, tit : '我的地址' , cla : 'fa fa-map-marker' , color:"#4AA5F0"},
  			{ id : 2, tit : '金币商城' , cla : 'fa fa-shopping-bag'  , color:"#94D94A"},
  			{ id : 3, tit : '分享拿5元现金' , cla : 'fa fa-gift' , color:"#FC7B53"},
  			{ id : 4, tit : '我的客服' , cla : 'fa fa-headphones' , color:"#4DA6F0"},
  			{ id : 5, tit : '下载饿了么APP' , cla : 'fa fa-edge' , color:"#3CABFF"},
  		],
  		isShow : true
  	}
  },
  computed :{
  	...mapState({
		userInfo : state => state.user.userInfo
	})
  },
  methods : {
  	...mapMutations(['EXIT'])
  },
  watch : {
  	'userInfo.username':{
  		immediate : true,
  		handler (val){
  			if(val){
  				this.isShow = false;
  				this.$router.replace({name:'mine'})
  			}else{
  				this.isShow = true;
  			}
  		}
  	}
  }
}
</script>

<style lang="scss" scoped>
.mine{
	.mine-title{
		width:100%;
		height:0.88rem;
		line-height: 0.88rem;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		color:#fff;
		text-align:center;
		i{
			display:block;
			position:absolute;
			left:0.6rem;
			top:0.2rem;
			font-size:24px;
		}
	}
	.login-box{
		width:100%;
		height:2.2rem;
		line-height:2.2rem;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		color:#fff;
		display:flex;
		.img-box{
			width:1.2rem;
			height:1.2rem;
			font-size:55px;
			margin-left: 0.5rem;
			color:#e5e5e5;
		}
		.login-info{
			margin-top:0.6rem;
			margin-left:0.3rem;
			line-height:0.6rem;
			i{
				display:inline-block;
				margin-right:0.1rem;
				font-size:14px;
			}
		}
		.arrow{
			font-size:20px;
			margin-left: 2.5rem;
		}
	}		

	.mine-nav{
		width:100%;
		height:1.6697rem;
		ul{
			display:flex;
			justify-content:space-around;
			align-items:center;
			li{
				padding-top:0.3rem;
				line-height:0.8rem;
				align-items:center;
				display:flex;
				width:33.33%;
				flex-direction:column;
				border-right: 1px solid #F3F3F3;
				border-bottom: 1px solid #F3F3F3;
				i{
					display:inline-block;
					width:0.5198rem;
					height:0.5198rem;
					text-align:center;
					border-radius: 50%;
					color:#fff;
					line-height:0.52rem;
					font-size:15px;
				}
				span{
					color:#777777;
					font-size:14px;
					font-weight:bolder;
				}
				
			}
		}
	}
	.line{height:0.3rem;background:#F5F5F5;}
	.mine-item{
		background:#F5F5F5;
		ul{			
			width:100%;
			li{
				background:#fff;
				height:0.8897rem;
				line-height:0.8897rem;
				font-size:18px;
				padding-left: 0.3rem;
				i:first-of-type{
					width:0.36rem;
					height:0.36rem;
				}
				i:last-of-type{
					float: right;
					line-height:0.8897rem;
					margin-right:0.4rem;
				}
				span{
					display:inline-block;
					margin-left:0.3rem;
				}
			}
			li:first-of-type{
				margin-bottom: 0.3rem;
				i{font-size:26px;}
			}
			li:nth-of-type(3){
				margin-bottom: 0.3rem;
			}
		}
	}

}
</style>





