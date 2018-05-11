<template>
  <div class="home-main">
    <router-view/>
    <div class="footer">
	    <ul>
	    	<router-link 
	    	tag = 'li' 
	    	:to="nav.path"
	    	v-for="nav in navs"
			:key="nav.id"
			active-class="active">
	    		<a href="javascript:;">				
					<i :class="nav.class"></i>
				{{nav.title}}</a>
	    	</router-link>
	    </ul>
    </div>
  </div>
</template>

<script>

import Home from '../Home/Home'
import Find from '../Find/Find'
import Order from '../Order/Order'
import Mine from '../Mine/Mine'
export default {
  name: 'HomeMain',
  data (){
  	return {
  		navs : [
  			{id:1,path:'/home',title:'首页',class:'fa fa-home'},
  			{id:2,path:'/find',title:'发现',class:'fa fa-search'},
  			{id:3,path:'/order',title:'订单',class:'fa fa-file-text-o'},
  			{id:4,path:'/mine',title:'我的',class:'fa fa-user-o'}
  		]
  	}
  },
  components : {
   
  }
}
</script>

<style lang="scss" scoped>
.home-main{
	width: 100%; height: 100%;
	.footer{
		position: fixed;
		width:100%;
		height:1rem;
		bottom: 0;
		z-index: 999;
		background:#fff;
		padding-top:.15rem;
		border-top: 0.01rem solid #e3e3e3;
		ul{
			display: flex;
			text-align: center;
			justify-content: space-around;
			li{
				padding-top: .02rem;
				display:flex;
				text-align:center;
				flex-direction: column;
				i{
					color:#8f8f8f;
					display: block;
					font-size: .36rem;
					margin-bottom: 0.05rem;
				}
				a{
					display: block;
					color:#8f8f8f;
					font-size: .24rem;
				}
			}
			.active{
				i{
					color:#0592ff;
				}
				a{
					color:#0592ff;
				}
			}
		}
	}
}
</style>
