<template>
  <div class="shopping-box">
   	<shopping-list
        v-for="shop in shops"
        :key="shop.restaurant.id"
        :shopinfo = 'shop'
    >
      
    </shopping-list>
  </div>
</template>

<script>

import ShoppingList from './ShoppingList';
import Vue from 'vue'
export default {
  name: 'ShoppingBox',
  data (){
  	return{
  		shops : []
  	}
  },
  mounted (){
  		this.$http('/em/restapi/shopping/v3/restaurants?latitude=39.904983&longitude=116.427287&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=d65f965a971c47b8b6bb283742d5bae3&terminal=h5').then( res=>{
  			console.log(res.data.items);
  			this.shops = res.data.items;
  		})
  },
  components : {
  	 ShoppingList
  }
}
</script>

<style lang="scss" scoped>

</style>
