import {
  SYNC_UPDATE
} from "./const";
import carst from "./index";
export default {
  initCarst ({ commit }) {
    setTimeout( () => {
      let carst = getCarst();
      commit( SYNC_UPDATE, carst );
    },300)
  },
  addFoodInCarst ({ commit },food) {
    setTimeout( () => {
      let carst = getCarst();
      let isHas = carst.some( (item, index) => {
        if( item.id === food.id ){
          item.num ++
          return true;
        }
      })
      if( ! isHas ) {
        food.num = 1;
        carst.push(food);
      }
      localStorage.carst = JSON.stringify(carst);
      commit(SYNC_UPDATE, carst);
    },300)
  },
  reduceFoodInCarst ({commit}, food) {
    setTimeout( () => {
      let carst = getCarst();
      carst = carst.filter( ( item ) => {
        if(item.id === food.id){
          item.num --;
        }
        if(item.num > 0){
          return true;
        }else{
          return false;
        }
      })
      localStorage.carst = JSON.stringify(carst);
      commit(SYNC_UPDATE, carst);
    },300)
  },
  getFoodNum({ state }, id){
    let foods = state.foods.filter((item, index) => {
      if(item.id == id){
        return true;
      }
    })
    if(foods.length) {
      console.log( foods[0].num );
      return foods[0].num;

    }else{
      return 0;
    }
  },
  clearCarst( {commit} ){
    let carst = [];
    localStorage.carst = JSON.stringify(carst);
    commit(SYNC_UPDATE, carst);
  }
}
function getCarst () {
  return JSON.parse(localStorage.carst ? localStorage.carst : '[]');
}
