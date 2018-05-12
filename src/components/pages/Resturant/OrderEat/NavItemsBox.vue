<template>
	<div class="nav-items-box" id="nav-items-box" ref="itemsBox">
		<div class="food-kind">
			<p><span>热销</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>优惠</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>双人套餐</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>主食套餐</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>主食饮料套餐</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>加食加味</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>蒸汤饮品</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>豪满足套餐</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>新品尝鲜</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
		<div class="food-kind">
			<p><span>主餐彩豆套餐</span>大家喜欢吃，才叫真好吃。</p>
			<nav-item v-for="n in 10" :key="n"></nav-item>
		</div>
	</div>
</template>
<script type="text/javascript">
import NavItem from './NavItem'

	export default{
		name : 'NavItemsBox',
		props:[
		  'activeIndex',
      'changeActiveIndex',
      'changeScrollTop',
      'scrollFlag',
      'closeFlag'
    ],
		data (){
			return {
				isShow : false,
        scrollTop: 0
			}
		},
		methods: {
		},
		watch:{
			activeIndex (val,oldVal) {
			  if(this.scrollFlag){
          let target = this.$refs.itemsBox.children[val].offsetTop
          $( this.$refs.itemsBox ).animate({"scrollTop":target},2000)
          this.closeFlag();
        }
			},
      scrollTop (val, oldVal) {
        this.changeScrollTop(val);
        let arr = Array.from(this.$refs.itemsBox.children) ;
        arr.forEach((item, index) => {
          if ( val >= item.offsetTop  && val < item.offsetTop + item.offsetHeight ){
            this.changeActiveIndex( index );
          }
        })
      }
		},
		components:{
			NavItem
		},
		mounted(){
      this.$refs.itemsBox.addEventListener("scroll", () =>{
        this.scrollTop = this.$refs.itemsBox.scrollTop;
      })
    }
	}
</script>
<style type="text/css" lang="scss" scoped>
	.nav-items-box{
		float:right;
		width:5.76rem;
		height:667px;
		overflow:auto;
		overflow-x: hidden;
		position:relative;
		.food-kind{
			width:100%;
			line-height:0.59rem;
			p{
				font-size:0.1rem;
				color:#ccc;
			}
			span{
				font-size:0.24rem;
				font-weight:bold;
				color:#333;
				display:inline-block;
				margin-right:0.1rem;
			}
		}

	}
</style>
