<template>
	<div class="comment-item">
		<div class="people-img">
			<i class="fa fa-user-circle"></i>
		</div>
		<div class="comm-word-box">
			<h3>张****G <span>2018-05-09</span></h3>			
			<p>
				<span>
				<i class="fa fa-star" v-for="n in 5" :key="n"></i>
				</span><span>40分钟送达</span>
			</p>
			<p class="word">今天很开心la啦啦啦啦啦啦啦啦的离开父母，对口人昆明房价天很开心la啦如此丰满</p>
			<div class="picture">
				<img src="/static/img/food.jpg" alt="">
			</div>
			<div class="tips">
				十三香龙...
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name : 'CommentItem'
	}
</script>
<style type="text/css" lang="scss" scoped>
	.comment-item{
		clear:both;
		width:100%;
		padding-top: 0.2rem;
		border-bottom: 1px solid #eee;
		.people-img{
			width:0.6rem;
			height:0.6rem;
			margin-top:0.2rem;
			float: left;
			i{
				font-size:0.6rem;
				color:#9dd5fe;
			}
		}
		.comm-word-box{
			float:left;
			margin-left:0.5rem;
			margin-top:0.2rem;
			width:5.5rem;
			h3{
				font-weight:normal;
				span{
					font-size:12px;
					color:#e0e0e0;
				}
			}
			.word{
				line-height:0.5rem;
				font-size:14px;
			}
			p{
				span{
					font-size:12px;
					color:#e0e0e0;
				}
				i{
					color:gold;
				}
			}
			.picture{
				width:1.42rem;
				height:1.42rem;
				img{
					width:100%;
					height:100%;
				}
			}
			.tips{
				width:1.62rem;
				height:0.44rem;
				line-height: 0.44rem;
				border:1px solid #eee;
				margin-top:0.1rem;
				text-align: center;
			}
		}
	}
</style>