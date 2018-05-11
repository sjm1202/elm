<template>
	<div class="classfiy swiper-container">
		<div class="swiper-wrapper">

			<div 
				class="swiper-slide page"
				v-for = 'pa,index in page'
				:key = 'index'
				>
				<classfiy-item
					v-for = 'item in items["page"+(pa-1)]'
					:key = 'item.id'
					:info = 'item'
				></classfiy-item>
			</div>
		</div>
		<div class="swiper-pagination" style="height:0.12rem"></div>
	</div>
</template>
<script type="text/javascript">
	import Swiper from 'swiper'
	import '../../../../node_modules/swiper/dist/css/swiper.min.css'
	import Vue from 'vue'
	import ClassfiyItem from './ClassfiyItem'
	export default {
		name : 'Classfiy',
		data (){
			return{
				items : {},
				page : null
			}
		},
		mounted (){
			let self = this;
			this.$http('/em/restapi/shopping/openapi/entries?latitude=40.117618&longitude=116.250627&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template').then(res=>{
				//总共渲染几页代码
				let len = res.data[0].entries.length;
				this.page = Math.ceil(len/10);

			

				// console.log( res.data[0].entries)

				for(let i=0;i<this.page;i++){
					let p = 'page'+i;

					if(i === 1){   //尾页
						this.items[p] = res.data[0].entries.splice(i*10,len-i*10);
						
					}else{
						this.items[p] = res.data[0].entries.slice(i*10,10);
						
					}
				}
		 	
				Vue.nextTick(()=>{
					new Swiper('.classfiy',{
	                    pagination: {
	                        el: '.swiper-pagination'
	                    }
					})
				})
			})
			
		},
		components:{
			ClassfiyItem
		}	
	}
</script>
<style type="text/css" lang="scss" scoped>
	.classfiy{
		width: 100%;
		height:3.54rem;
		.page{
			width:100%;
			height:100%;
			padding-top: 0;
		}
	}
</style>