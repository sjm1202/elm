<template>
	<div class="classfiy-item img-background">
		<a href="#">
			<img :src="getImgSrc" alt="">
			<span class="title">{{info.name}}</span>
		</a>
	</div>
</template>
<script type="text/javascript">
	
	export default {
		name : 'ClassfiyItem',
		props : ['info'],
		data (){
			return {
				items : []
			}
		},
		computed:{
			getImgSrc(){
				let str = this.info.image_hash;
				let result = 'https://fuss10.elemecdn.com/';
				result += str.substr(0,1)+"/";
				result += str.substr(1,2)+"/";
				result += str.substr(3);
				result += '.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/';
				return result;
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.classfiy-item{
		width: 1.5rem;
	    height:1.2798rem;
	    display:block;
		position: relative;
	    float: left;
	    margin-top: .293333rem;
	    a{
			display:block;
			position: relative;
		    float: left;
		    width: 1.5rem;
		    height:1.2798rem;
		    text-align:center;
		    vertical-align: center;
		    img{
		    	width:0.9rem;
		    	height:0.9rem;
		    	margin: 0 auto;
		    	display:block;

		    }
		    .title{
				color: #666;
    			font-size: .24rem;
		    }

		}
	}
	
</style>