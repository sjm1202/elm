<template>
	<div 
		class="nav-item"
			@click='openDetail'
		>

		<div class="food">
			<div class="img-box">
				<span>新品</span>
				<img src="/static/img/food.jpg">
			</div>
			<div class="food-info">
				<h2>独门招牌龙虾饭【香辣】</h2>
				<p class="tips">断案，笼罩着碰撞白色热气的香，吃着...</p>
				<p><span>月售927份</span> &nbsp; <span>好评率98%</span></p>
				<div class="send">
					<p>￥<span>37.9</span>起</p>
					<p>选规格</p>
				</div>
			</div>
		</div>

		<food-detail v-if="isShow" :closeDetail='closeDetail'></food-detail>
	</div>
</template>
<script type="text/javascript">
import FoodDetail from './FoodDetail'
	export default{
		name : 'NavItem',
		data (){
			return {
				isShow : false
			}
		},
		components : {
			FoodDetail
		},
		methods: {
			closeDetail (){
				console.log("1");
				this.isShow = false;
			},
			openDetail(){
				console.log(2)
				this.isShow = true;
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.nav-item{
		.food{
			width:5.76rem;
			height:2.0695rem;
			display:flex;
			padding: 0.3rem 0;
			justify-content:space-between;
			.img-box{
				position:relative;
				width:1.55rem;
				height:1.55rem;
				img{width:100%; height:100%;}
				span{
					position:absolute;
					top:0;
					left:0;
					display:block;
					width:0.52rem;
					height:0.32rem;
					color:#fff;
					font-size:0.06rem;
					background:#7ae336;
				}
			}
			.food-info{
				height:1.52rem;
				margin-left:0.2rem;
				margin-right:0.5rem;
				h2{
					height:0.42rem;
					font-size:0.32rem;
					line-height:1.2;
					color:#333;
				}
				p{
					height:0.4rem;
					font-size:12px;
				}
				.tips{					
					color:#ccc;
					overflow: hidden;
				}
				.send{
					display:flex;
					justify-content:space-between;
					p:first-of-type{
						color: #f60;
						span{
							font-weight: 700;
						    font-size: .35rem;
						    line-height: .426667rem;						   
						    color: #f60;
						}
					}
					p:last-of-type{
						position:relative;
						width:1.12rem;
						height:0.5rem;
						background:#3199e8;
						padding: 0 .2rem;
						font-size: 12px;
						line-height:0.5rem;color:#fff;
						border-radius: .346667rem;
					}
				}
			}

		}
	}
</style> 