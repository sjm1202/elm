export default {
  getTotal (state) {
    let sum = 0;
    let coumt = 0;
    state.foods.forEach( (item, index) => {
      sum += item.price * item.num;
      coumt += item.num;
    })
    return { sum, coumt };
  }
}
