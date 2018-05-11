<template>
	<div class="order-eat" >
		<nav-bar :active-index="activeIndex" :change-active-index="changeActiveIndex"></nav-bar>
		<nav-items-box :active-index="activeIndex" :change-active-index="changeActiveIndex"></nav-items-box>
		<food-footer ></food-footer>
	</div>
</template>
<script type="text/javascript">

import NavBar from './NavBar';
import FoodFooter from './FoodFooter';
import NavItemsBox from './NavItemsBox';
	export default{
		name : 'OrderEat',
		data () {
			return {
				activeIndex : 0
			}
		},
		methods:{
			changeActiveIndex(index){
				this.activeIndex = index
			}
		},
		components : {
			NavBar, NavItemsBox,FoodFooter
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
</style>