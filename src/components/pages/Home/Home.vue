<template>
	<div class="home">
		<!-- 头部 -->
		<div class="header">
			<div class="header-title">
				<i class="fa fa-map-marker"></i>
				<span>北京科技职业技术学院</span>
				<i class="fa fa-angle-down"></i>
			</div>
		</div>
		<div :class="{ 'search-wrap':true, isFixed : isFixed }" v-scroll-fix="isFixed" scroll-fixed-distanc = "44.5">
			<div class="search">
				<a href="#">
					<i class="fa fa-search"></i>
					<span>搜索饿了么商家、商品名称</span>
				</a>
			</div>
		</div>

		<!-- banner -->
		<div class="banner">
			<img src="/static/img/banner.webp" alt="">
		</div>

		<!-- 分类组件 -->
		<classfiy></classfiy>


		<!-- 品质套餐 -->
		<section class="activity">
			<div class="activity-box">
				<div class="left">
					<h3>品质套餐</h3>
					<p>搭配齐全吃得好</p>
					<a href="#">立即抢购<i class="fa fa-angle-right"></i></a>
				</div>
				<div class="right">
					<img src="/static/img/activity.webp" alt="">
				</div>
			</div>
		</section>
		<!-- 推荐商家 -->
		<div id="shoplist-title" class="shoplist-title">
		推荐商家
		</div>
		<shopping-box></shopping-box>
	</div>

</template>

<script type="text/javascript">
import Classfiy from './Classfiy';
import ShoppingBox from './ShoppingBox';
	export default {
		name : 'Home',
		data () {
			return {
				isFixed: false
			}
		},
		components : {
			Classfiy,ShoppingBox
		},
		mounted (){

		}
	}
</script>

<style type="text/css" lang="scss" scoped>
	.header{
		height:0.89rem;
		width: 100%;
		padding: 0.2rem 0.28rem 0 0.28rem;
		background: #009dfe;
		.header-title{
			width:100%;
			height:100%;
			display: flex;
			align-items:center;
			color: #feffff;
			font-size: 0.32rem;
			font-weight: bold;
			i:first-of-type{
				font-size:0.44rem;
			}
			span{
				display:inline-block;
				margin: 0 0.2rem;
			}
		}
	}

	.search-wrap{
		width:100%;
		height:1.02rem;
		position:absolute;
		&.isFixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index:900;
		}
		.search{
			width:100%;
			height:1.02rem;
			background:#009dfe;
			padding: .2rem .373333rem;

			a{
				display:block;
				height:0.72rem;
				width:6.94rem;
				background:#fff;
				line-height: 0.72rem;
				color:#acacac;
				text-align: center;
				i{
					width: .426667rem;
					height:.426667rem;
					font-size:.32rem;
				}
			}
		}
	}
	.banner{
		margin-top:1.02rem;
		height:2.10rem;
		width:100%;
		img{
			width:100%;
			height:2.10rem;
		}
	}
	.activity{
		width:100%;
		height:2.20rem;
		margin-top: 0.2rem;
		.activity-box{
			padding: .32rem 0 0 .4rem;
			margin:0 0.2rem;
			background:#f6f6f6;
			height:2.20rem;
			.left{
				float:left;
				h3{
					font-size: .32rem;
					color:#333;
					line-height:.4rem;
					height:.4rem;
					margin-bottom: .133333rem
				}
				p{
					font-size: .28rem;
				    color: #777;
				    margin-bottom: .12rem;
				}
				a{
					font-size: .28rem;
				    color: #af8260;
				    font-weight: 700;
				    i{
				    	display:inline-block;
				    	margin-left: 0.1rem;
				    	font-weight: 700;
				    }
				}
			}
			.right{
				float:right;
				width:2.82rem;
				height:1.88rem;
				img{
					width:100%;
					height:100%;
				}
			}
		}
	}
	#shoplist-title {
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    height: .72rem;
	    line-height:.72rem;
	    font-size: .32rem;
	    color: #000;
	    margin-top:.2rem;
	    &:after, &:before {
		    display: block;
		    content: "";
		    width: .533333rem;
		    height: .026667rem;
		    background-color: #999;
		}
	    &:before {
		    margin-right: .17rem;
		}
		&:after {
		    margin-left: .17rem;
		}
	}

</style>
