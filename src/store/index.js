import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './user';
import carst from './carst';
const store = new Vuex.Store({
	modules : {
		user,
    carst
	}
})

export default store;
