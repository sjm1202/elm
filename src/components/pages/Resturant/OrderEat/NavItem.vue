<template>
	<div
		class="nav-item"
			@click='openDetail'
		>

		<div class="food">
			<div class="img-box">
				<!--<span>新品</span>-->
				<img :src="food.imgSrc">
			</div>
			<div class="food-info">
				<h2>{{food.name}}</h2>
				<p class="tips">{{food.description}}</p>
				<p><span>月售{{food.sell}}份</span> &nbsp; <span>好评率{{food.evaluate}}</span></p>
				<div class="send">
					<span class="price">￥{{food.price}}</span>
          <div class="btns">
            <i class="fa fa-minus-circle" v-show="num" @click.stop="reduceFoodInCarst(food)"></i>
            <span class="num" v-show="num">{{num}}</span>
            <i class="fa fa-plus-circle" @click.stop="addFoodInCarst(food)"></i>
          </div>


				</div>
			</div>
		</div>

		<food-detail v-if="isShow" :closeDetail='closeDetail' :food="food"></food-detail>
	</div>
</template>
<script type="text/javascript">
import { mapState, mapActions, mapGetters } from 'vuex'
import FoodDetail from './FoodDetail'
	export default{
		name : 'NavItem',
    props: ['food'],
		data (){
			return {
				isShow : false,
        num: 0,
			}
		},
		components : {
			FoodDetail
		},
    computed:{
      ...mapState({
        foods : state => state.carst.foods
      })
    },
		methods: {
      ...mapActions(['addFoodInCarst', 'reduceFoodInCarst', 'getFoodNum', 'initCarst']),
			closeDetail (){
				this.isShow = false;
			},
			openDetail(){
				this.isShow = true;
			}
		},
    watch: {
      foods: {
        immediate:true,
        handler(val) {
          let flag = true;
          val.forEach((item, index) => {
            if (item.id === this.food.id ) {
              flag = false;
              if (item.num !== this.num) {
                this.num = item.num;
              }
            }
          })
          if(flag){
            this.num = 0;
          }
        }
      }
    },
    created () {
      this.initCarst()
    }
	}
</script>
<style type="text/css" lang="scss" scoped>
	.nav-item{
		.food{
			width:5.76rem;
			display:flex;
			padding: 0.3rem 0;
			justify-content:space-between;
			.img-box{
				position:relative;
				width:1.55rem;
				height:1.55rem;
        flex-grow: 0;
        flex-shrink: 0;
				img{width:1.55rem}
				span{
					position:absolute;
					top:0;
					left:0;
					display:block;
					width:0.52rem;
					height:0.32rem;
					color:#fff;
					font-size:0.06rem;
					background:#7ae336;
				}
			}
			.food-info{
				margin-left:0.2rem;
				margin-right:0.5rem;
        flex-grow: 1;
        flex-shrink: 1;
        overflow: hidden;
				h2{
					height:0.42rem;
					font-size:0.32rem;
					line-height:1.2;
					color:#333;
          white-space: nowrap;
				}
				p{
					height:0.4rem;
					font-size:12px;
				}
				.tips{
					color:#ccc;
					overflow: hidden;
				}
				.send{
					display:flex;
					justify-content:space-between;
          align-items: center;
          height: .64rem;
          .price{
            font-weight: 700;
            font-size: .35rem;
            line-height: .426667rem;
            color: #f60;
          }
          .btns{
            display:flex;
            align-items: center;
            .fa{
              color:#3199e8;
              font-size: 0.4rem;
              line-height:0.64rem;
            }
            .num{

              padding: 0 .2rem;
              display: inline-block;
              line-height:0.40rem;
              font-size: .2rem;
            }

          }

				}
			}

		}
	}
</style>
