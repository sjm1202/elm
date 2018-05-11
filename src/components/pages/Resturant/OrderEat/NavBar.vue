<template>
	<div class="nav-bar">
		<ul>
			<li v-for = "( item, index ) in items" @touchstart="itemClick(index)"
			 :class="{ active: (index == activeIndex) }"
			 >
				{{item.title}}
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name : 'NavBar',
		props:['activeIndex','changeActiveIndex','openFlag'],
		data () {
			return {
				items: [
					{"id" : "0001","title" : "热销"},
					{"id" : "0002","title" : "优惠"},
					{"id" : "0003","title" : "双人套餐"},
					{"id" : "0004","title" : "主食套餐"},
					{"id" : "0005","title" : "主食饮料套餐"},
					{"id" : "0006","title" : "加食加味"},
					{"id" : "0007","title" : "蒸汤饮品"},
					{"id" : "0008","title" : "豪满足套餐"},
					{"id" : "0009","title" : "新品尝鲜"},
					{"id" : "00010","title" : "主餐彩豆套餐"},

				]
			}
		},
		methods: {
			itemClick(index){
        this.openFlag();
				this.changeActiveIndex(index);
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.nav-bar{
		width:1.54rem;
		float: left;
		height: 669px;
		overflow:auto;
		overflow-x: hidden;
		ul li{
			width:1.5rem;
			height:0.9rem;
			background:#fff;
			color:#666;
			font-size:0.24rem;
			text-align:center;
			line-height:0.9rem;
			border-bottom: 1px solid #e8e8e8;
			&.active{
				background:#eef;
			}
		}
	}
</style>
