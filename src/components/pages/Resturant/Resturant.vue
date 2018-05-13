<template>
	<div class="resturant">
		<div class="res-header">

			<div class="res-top">
				<div class="mask">
					<router-link :to="{name:'home'}" tag="span">
						<i class="fa fa-angle-left"></i>
					</router-link>
				</div>
			</div>

			<div class="res-title">
				<img src="/static/img/header-img.webp">
				<div class="res-info">
					<h1>枯矾炸鸡啤酒（北京西站店）<i class="fa fa-caret-right"></i></h1>
					<p><span>4.9</span> &nbsp; <span>月售1440单</span>&nbsp;&nbsp;&nbsp;<span>商家配送</span> <span>约27分钟</span> &nbsp; &nbsp;&nbsp;<span>距离2.2km</span></p>
					<p>由于天气原因呢，请您提前下单点餐，本店...</p>
				</div>
			</div>

			<div class="res-discount">
				<p><span class="first">首单</span><span>新用户下单立减17元(不与其他活动同享)</span></p>
				<p><span>7个优惠</span><i class="fa fa-caret-down"></i></p>

			</div>
			<div class="red-money">
				<p><i class="fa fa-diamond"></i>8元无门槛红包</p>
				<p>领取</p>
			</div>
		</div>
		<div class="res-nav">
			<ul>
				<router-link
			    	tag = 'li'
			    	:to="nav.path"
			    	v-for="nav in navs"
					:key="nav.id"
					active-class="active"
					>
					{{nav.tit}}
				</router-link>
			</ul>
		</div>
		<router-view :change-scroll-top="changeScrollTop"/>

	</div>
</template>
<script type="text/javascript">
	export default {
		name : 'Resturant',
		data (){
			return {
			 	scrollTop : 0,
				navs : [
					{id : 1, tit : '点餐' , path :'/order-eat'},
					{id : 2, tit : '评价' , path :'/comment'},
					{id : 3, tit : '商家' , path :'/shop'}
				]
			}
		},
	    methods: {
			changeScrollTop (distance) {
			    this.scrollTop = distance;
	        }
	    },
	    watch: {
	        scrollTop(val){
	            document.documentElement.scrollTop = val;
	        }
	    }
	}
</script>
<style type="text/css" lang="scss" scoped>
	.resturant{
		height:904.45px;
		overflow:hidden;
		.res-header{
			width: 100%;
			height:4.7492rem;
			.res-top{
				height:1.36rem;
				background-image: url("/static/img/header-bg.webp");
				.mask{
					height:1.36rem;
					background-color: rgba(119,103,137,0.4);
					span{
						width:0.5rem;
						height:0.5rem;
						display:block;
						font-size:0.6rem;
						color:#fff;
						margin-left: 0.2rem;
					}
				}
			}
			.res-title{
				width:100%;
				height:2.098rem;
				position:relative;
				text-align:center;
				padding-top:0.61rem;
				img{
					position: absolute;
					top: -0.8rem;
					left: 40%;
					width:1.3rem;
					height:1.3rem;
					display:block;
				}
				.res-info{
					clear:both;
					width:6.9rem;
					height:1.4898rem;
					margin:0 auto;
				}
				h1{
					font-size: .39rem;
				    line-height: 1.2em;
				    color:#333;
				}
				p{
					line-height:0.45rem;
					color:#999;
					span{
						font-size: .2rem;
	    				color: #333;
					}
				}
			}
			.res-discount{
				width:6.54rem;
				height:0.45rem;
				margin: 0 auto;
				text-align:center;
				border:1px solid #eee;
				font-size:0.06rem;
				color:#666;
				display:flex;
				padding-top:0.05rem;
				justify-content:space-around;
				i{
					display:inline-block;
					margin-left:0.1rem;
				}
				.first{
					display:inline-block;
					width:0.56rem;
					height:0.28rem;
					background-color: rgb(112, 188, 70);
					position:relative;
					color:#fff;
				    margin-right: 0.1rem;


				}
			}
			.red-money{
				width:2.75rem;
				height:0.5rem;
				background: #fff8d7;
				color: #594519;
				display:flex;
				justify-content:space-around;
				margin:0 auto;
				line-height:0.5rem;
				margin-top:0.2rem;
				font-weight: bold;
				i{
					color:gold;
					margin-right:0.1rem;
				}
			}
		}


		.res-nav{
			width:100%;
			height:0.81rem;
			line-height:0.81rem;
			ul{
				display:flex;
				border-bottom: 1px solid #ddd;
				justify-content:space-around;
				li{
					color:#666;
					font-size:0.24rem;
				}
				.active{
					border-bottom: 2px solid #2395ff;
				}
			}

		}

	}
</style>
