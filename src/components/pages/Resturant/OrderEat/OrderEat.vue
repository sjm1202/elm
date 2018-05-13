<template>
	<div class="order-eat" >
		<nav-bar :active-index="activeIndex"
             :change-active-index="changeActiveIndex"
             :open-flag="openFlag"
    ></nav-bar>
		<nav-items-box :active-index="activeIndex"
                   :change-active-index="changeActiveIndex"
                   :change-scroll-top="changeScrollTop"
                   :scroll-flag="scrollFlag"
                   :close-flag="closeFlag"
    ></nav-items-box>
		<food-footer ></food-footer>
	</div>
</template>
<script type="text/javascript">

import NavBar from './NavBar';
import FoodFooter from './FoodFooter';
import NavItemsBox from './NavItemsBox';
	export default{
		name : 'OrderEat',
        props: ['changeScrollTop'],
		data () {
			return {
				activeIndex : 0,
                scrollFlag : false
			}
		},
		methods:{
			changeActiveIndex(index){
				this.activeIndex = index
			},
	        openFlag () {
	            this.scrollFlag = true;
	        },
	        closeFlag () {
	            this.scrollFlag = false;
	        }
		},
		components : {
			NavBar, NavItemsBox,FoodFooter
		},
		watch: {
			scrollFlag (val) {
				console.log(val)
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
</style>
