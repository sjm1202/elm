<template>
	<router-link 
		tag="div"
		:to = "{name:'order-eat'}"
		class="shopping-list" 
		v-if="shopinfo">



	   	<div class="shopping-info">
	   		<div class='shopping-logo'>
	   			<img :src="getImgSrc" alt="">
	   		</div>
	   		<div class="shopping-detail-info">
	   			<div class="title"><h3>{{shopinfo.restaurant.name}}</h3></div>
	   			<div class="star">
	   				<img src="" alt="">
	   				<span class="num">{{shopinfo.restaurant.rating}}</span>
	   				<span class="sole">  月售{{shopinfo.restaurant.recent_order_num}}单</span>
	   			</div>
				<div class="send">
					<div class="dend-left">
						<span>￥{{shopinfo.restaurant.float_minimum_order_amount}}起送</span>
						<span class="spe">配送费￥{{shopinfo.restaurant.float_delivery_fee}}</span>
					</div>
					<div class="right">
						<span>{{shopinfo.restaurant.distance | kilm}}km</span>
						<span class="spe">{{shopinfo.restaurant.order_lead_time}}分钟</span>
					</div>

				</div>
	   		</div>
	   	</div>
	   	<div class="shopping-discount">
	   		<p>
	   			<span class="first-font first">首</span><span>新用户下单立减17元</span>
	   		</p>
	   		<p>
	   			<span class="first-font del">减</span><span>{{shopinfo.restaurant.activities[1].tips}}</span>
	   		</p>	   		
	   	</div>
	</router-link>

</template>

<script>


export default {
  name: 'ShoppingList',
  props : ['shopinfo'],
  computed:{
  		getImgSrc(){
			let str = this.shopinfo.restaurant.image_path;
			let reg = /\w(png)/i;
			let result = 'https://fuss10.elemecdn.com/';
			result += str.substr(0,1)+"/";
			result += str.substr(1,2)+"/";
			result += str.substr(3);
			if(reg.test(str)){				
				result += '.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
			}else{
				result += '.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
			}
			
			return result;
		}
  }
}
</script>

<style lang="scss" scoped>
.shopping-list{
	width:100%;
	height:3.2rem;
	padding: 0.2rem 0.167rem 0 0.167rem;
	border-bottom: 1px solid #ddd;
	.shopping-info{
		height:1.85rem;
		display:flex;
		justify-content:space-between;
		.shopping-logo{
			width:1.85rem;
			height:1.85rem;
			img{
				width:100%;
				height:100%;
			}
		}
		.shopping-detail-info{
			width:5.15rem;
			height:1.85rem;
			padding:0.1rem 0.15rem;
			.title{
				h3{
					color:#333;
					font-size:.30rem;
					height:0.6rem;
					line-height: 0.6rem;
				}
			}
			.star{
				height:0.45rem;
				line-height: 0.45rem;
				span{
					font-size:0.2rem;
				}
				img{
					width:1.8547rem;
					height:0.3311rem;
					background:red;
				}
			}
			.send{
				display:flex;
				justify-content:space-between;
				height:0.45rem;
				line-height: 0.45rem;
				font-size:0.2rem;
			}
			.spe:before{
				margin: 0 .017067rem;
			    margin: 0 .08rem;
			    color: #ddd;
			    content: "|";
			}
		}
	}
	.shopping-discount{
		height:1.03rem;
		width:100%;
		text-align:center;
		padding-top:0.2rem;
		font-size: .24rem;
		p{
			height:0.4rem;
			.first-font{
				display:inline-block;	
				height: .30rem;
			    width: .30rem;
			    font-size: .24rem;
			    color: #fff;
			    align-self:center;
			    margin-right: 0.14rem;			
			}
			.first{
		    	background-color: rgb(112, 188, 70);
		    }
		    .del{
		    	background-color: rgb(240, 115, 115);
		    }
		}
	}
}

</style>
