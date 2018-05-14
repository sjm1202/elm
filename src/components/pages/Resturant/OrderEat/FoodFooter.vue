<template>
	<div class="food-footer" @click="changeShow()">
		<div class="cart-box">
			<div class="cart" :class="{active:foods.length > 0}">
				<i class="fa fa-shopping-cart"></i>
			</div>

		</div>
		<div class="price">
			<p>￥{{getTotal.sum}}</p>
			<p>配送费￥3</p>
		</div>
		<div class="start-send">
			<p v-if="getTotal.sum < 20">￥20起送</p>
      <p v-else class="check" @click.stop="">去结算</p>
		</div>
    <div class="carstMask" v-if="isShow">

    </div>
    <div class="carstListBox" v-if="isShow" @click.stop="">
      <div class="carstHeader">
          <div class="title">已选商品</div>
          <i class="fa fa-trash" @click="clearCarst">清空</i>
      </div>
      <ul class="carstList">
        <li v-for="food in foods">
          <div class="foodName">{{food.name}}</div>
          <div class="infoBox">
            <span class="totalPrice">￥{{food.num * food.price}}</span>
            <div class="btns">
              <i class="fa fa-minus-circle" @click.stop="reduceFoodInCarst(food)"></i>
              <span class="num" >{{food.num}}</span>
              <i class="fa fa-plus-circle" @click.stop="addFoodInCarst(food)"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters, mapState, mapActions} from 'vuex'
export default{
  name : 'FoodFooter',
  computed : {
    ...mapGetters(['getTotal']),
    ...mapState({
      foods : state => state.carst.foods
    }),
  },
  watch: {
    foods (val) {
      if (val.length === 0) {
        this.isShow = false;
      }
    }
  },
  methods: {
    ...mapActions(['addFoodInCarst', 'reduceFoodInCarst', 'getFoodNum', 'clearCarst']),
    changeShow(val){
      console.log(1);
      this.isShow = val ? val : !this.isShow;
    }
  },
  data () {
    return {
      isShow : false
    }
  }
}
</script>
<style type="text/css" lang="scss" scoped>
.food-footer{
	height:0.96rem;
	width: 100%;
	background:rgba(61,61,63,.9);
  position:fixed;
  line-height:0.96rem;
  bottom: 0;
  left:0;
  .carstMask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: .96rem;
    background-color: rgba(0, 0, 0, .5);
    z-index: 0;
  }
  .cart-box{
    width:1rem;
    height:1rem;
    background:#666;
    position:absolute;
    border-radius:50%;
    bottom:0.25rem;
    left:0.2rem;
    z-index: 10;
    .cart{
      width:0.8rem;
      height:0.8rem;
      background:#444;
      border-radius:50%;
      position: absolute;
      left:0.1rem;
      top:0.1rem;
      text-align:center;
      line-height:1.0rem;
      &.active{
        background-color: #3190E8;
        color:#fff;
      }
      i{
        font-size: 0.55rem;
      }
    }
  }
  .price{
    float:left;
    margin-left: 1.5rem;
    p{
      color:#fff;
      line-height:.6rem;
      font-size: .38rem;
    }
		p:last-of-type{
			line-height:.1rem;
			color:#999;
			font-size:0.1rem;

		}
  }
  .start-send{
    float: right;
    color:#fff;
    width: 2.1rem;
    font-weight:bold;
    font-size: .32rem;
    text-align: center;
    .check{
      background-color: #4CD964;
    }
  }
  .carstListBox {
    width: 100%;
    padding-bottom: 1rem;
    position: absolute;
    bottom: 0.96rem;
    background-color: #fff;
    .carstHeader {
      display: flex;
      justify-content: space-between;
      align-content: center;
      height: .8rem;
      background-color: #ECEFF1;
      bottom: 0.96rem;
      font-size: .3rem;
      padding: 0 .2rem;
      .title{
        line-height:.8rem;
      }
      .fa{
        line-height:.8rem;
      }
    }
    .carstList {
      max-height: 3.8rem;
      overflow: auto;
      li{
        width: 100%;
        padding: .2rem;
        height: 1.1rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        font-size: .3rem;
        .foodName{
          height: .5rem;
          line-height: .5rem;
        }
        .infoBox{
          display: flex;
          height: .5rem;
          line-height: .5rem;
          .totalPrice{
            display: inline-block;
            font-weight: 700;
            font-size: .35rem;
            color: #f60;
            margin-right: .3rem;
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
              font-size: .2rem;
            }

          }
        }
      }

    }
  }
}
</style>
