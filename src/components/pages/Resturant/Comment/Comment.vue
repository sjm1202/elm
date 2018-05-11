<template>
	<div class="comment">
		<div class="scode-box">
			<div class="comment-left">
				<h3>4.8</h3>
				<p>综合评价</p>
				<p>高于周边商家51.0%</p>
			</div>
			<div class="comment-right">
				<p>服务态度
					<span>
						<b>
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
						</b>
					<strong>5.0</strong></span></p>
				<p>菜品评价
					<span>
						<b>
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-full"></i>
						</b>
					<strong>4.5</strong></span></p>
				<p>送达时间<span class="time">42分钟</span></p>
			</div>
		</div>
		<div class="line"></div>
		<div class="comment-classfiy-box">
			<div class="comment-classfiy">
				<ul>
					<li v-for='nav in navs' :key="nav.id">{{nav.tit}}</li>
				</ul>
			</div>
			<comment-item v-for="n in 10" :key="n"></comment-item>
		</div>
	</div>
</template>
<script type="text/javascript">
import CommentItem from './Comment-item'

	export default{
		name : 'Comment',
		components : {
			CommentItem
		},
		data () {
			return{
				navs : [
					{id:1,tit:'全部',num:1191},
					{id:2,tit:'满意',num:1128},
					{id:3,tit:'不满意',num:63},
					{id:4,tit:'有图',num:71},
					{id:5,tit:'味道好',num:43},
					{id:6,tit:'分量一般',num:12}
				]
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
.comment{
	.scode-box{
		height: 1.9291rem;
		width: 100%;
	    padding: .4rem;
	    font-size: .36rem;
	    display: flex;
	    align-items: center;
	    color: #666;
	    border-bottom: 1px solid #eee;
	    .comment-left{
	    	width:2.5rem;
	    	height:1.14rem;
    	    padding-right: .3rem;
		    border-right: 1px solid #ddd;
		    text-align: center;
		    line-height: 1.5;
	    	h3{
	    		font-size: .64rem;
			    line-height: 1;
			    font-weight: 400;
			    color: #ff6000;
			    display: block;
	    	}
	    	p:first-of-type{
	    		font-size: 0.25rem;
	    	}
	    	p:last-of-type{
	    		font-size: 12px;
	    		color:#e0e0e0;
	    	}
	    }
	    .comment-right{
	    	font-size:14px;
	    	height:1.14rem;
	    	padding-left: .3rem;
	    	p{
	    		line-height:0.4rem;
	    		b{
	    			display:inline-block;
	    			margin: 0 0.2rem;
	    		}
	    		strong{
	    			font-weight:normal;
	    			color:#ff6000;
	    		}
	    		i{
	    			color:gold;
	    		
	    		}
	    		.time{
	    			display:inline-block;
	    			margin:0 0.4rem;
	    		}

	    	}
	    }
	}
	.line{
		width:100%;
		height:0.27rem;
		background:#f5f5f5;
	}
	.comment-classfiy-box{
		width:100%;
		padding:0 0.26777rem;
		.comment-classfiy{
			height:2.0rem;
			border-bottom:1px solid #eee;
			ul{
				li{
					width:1.5159rem;
					height:0.56rem;
					float: left;
					text-align:center;
					line-height:0.56rem;
					background:#ebf5ff;
					margin:0.3rem 0.1rem 0 0.1rem;
					font-size:0.32rem;
				}
				li:first-of-type{
					background:#0097ff;
					color:#fff;
				}
				.active{
					background:#0097ff;
					color:#fff;
				}
			}
		}

	}
}
	
</style>