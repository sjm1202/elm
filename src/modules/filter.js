import Vue from 'vue'
//  15232864354653 -> 3月18日
Vue.filter ('premiere', (value)=>{
	let date = new Date(value);
	return (date.getMonth()+1+'月'+date.getDate()+'日')
})
Vue.filter ('kilm', (num)=>{
	return (num/1000).toFixed(2);
})