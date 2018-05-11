<template>
	<div class="food-footer">
		<div class="cart-box">
			<div class="cart">
				<i class="fa fa-shopping-cart"></i>				
			</div>

		</div>
		<div class="price">
			<p>￥0</p>
			<p>配送费￥3</p>
		</div>
		<div class="start-send">
			<p>￥20起送</p>
		</div>
	</div>
</template>
<script type="text/javascript">


	export default{
		name : 'FoodFooter'
		
	}
</script>
<style type="text/css" lang="scss" scoped>
.food-footer{
	height:0.96rem;
	width: 100%;
	background:rgba(61,61,63,.9);
    position:fixed;
    line-height:0.96rem;
    bottom: 0;
    left:0;
    .cart-box{
    	width:1rem;
    	height:1rem;
    	background:#666;
    	position:absolute;
    	border-radius:50%;
    	bottom:0.25rem;
    	left:0.2rem;
    	.cart{
    		width:0.8rem;
    		height:0.8rem;
    		background:#444;
    		border-radius:50%;
	    	position: absolute;
	    	left:0.1rem;
	    	top:0.1rem;
	    	text-align:center;
	    	line-height:1.0rem;
		    i{
		    	font-size: 0.55rem;
		    }
	    }
    }
    .price{
    	float:left;
 		margin-left: 1.5rem;   	
    	p{
    		color:#fff;
    		line-height:.6rem;
    		font-size: .38rem;
    	}
		p:last-of-type{
			line-height:.1rem;
			color:#999;
			font-size:0.1rem;

		}
    }
    .start-send{
    	float: right;
    	color:#fff;
    	margin-right: 0.5rem;
    	font-weight:bold;
    	font-size: .32rem;
    }
    
}
</style>