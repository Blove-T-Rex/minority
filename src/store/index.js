import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		changeTitle:''
	},
	actions:{

	},
	mutations:{
		changeTitle(state,payload){
			console.log(payload);

			state.changeTitle = payload;
		}
	}
})

export default store;
	

