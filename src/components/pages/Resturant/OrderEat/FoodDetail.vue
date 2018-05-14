<template>
	<div class="food-detail">
		<div class="food-box" @click.stop="">
			<div class="img-box">
				<img :src="food.imgSrc" alt="">
			</div>
			<div class="food-tit">
				<h4>{{food.name}}</h4>
				<p>月售{{food.sell}}份 &nbsp;好评率{{food.evaluate}}</p>
				<div class="price">
					<p><span>￥</span>{{food.price}}</p>
					<p><i class="fa fa-plus-circle" @click="addFoodInCarst(food)"></i></p>
				</div>
			</div>
		</div>
		<div class="mask" @click.stop="closeDetail" ></div>
	</div>

</template>
<script type="text/javascript">
  import {mapActions} from 'vuex'
export default{
  name : 'FoodDetail',
  props : ['closeDetail', 'food'],
  methods : {
    ...mapActions(['addFoodInCarst'])
  }
}
</script>
<style type="text/css" lang="scss" scoped>
	.food-detail{
		position:fixed;
		left:0;
		right: 0;
		bottom: 0;
		top:0;
		z-index:99;
		.food-box{
			background:#fff;
			width:6.4rem;
			height:8.6rem;
			z-index:11;
			position:fixed;
			left: 50%;
			top: 50%;
			z-index:9999;
			transform: translate(-50%,-55%);
			.img-box{
				width:6.4rem;
				height:6.4rem;
				img{
					width:100%;
					height:100%;
				}
			}
			.food-tit{
				padding: 0.2rem;
				h4{
					height:0.45rem;
					line-height:0.35rem;
					font-size: 16px;
					color:#333;
				}
				p{
					height:0.5rem;
				}
				div.price{
					margin-top: 0.2rem;
					display:flex;
					justify-content:space-between;
					font-size:24px;
					color:#f60;
					span{
						font-size:20px;
					}
					i{
						color:#2395ff;
					}
				}
			}
		}

		.mask{
			width: 100%;
			height:100%;
			opacity: 0.5;
			z-index: 9;
		}
	}
</style>
