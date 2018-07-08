import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		changeTitle:'',
		home:[]
	},
	actions:{
		phone(store){
			axios.get("/v1/special_columns?limit=999&offset=0&sort=recommended_at&include_total=false&is_matrix=true&recommended=true").then(res=>{
				console.log(res.data.list)
				store.commit("geth",res)
			})
		}
	},
	mutations:{
		changeTitle(state,payload){
			console.log(payload);

			state.changeTitle = payload;
		},
		geth(state,el){
				state.home=el.data.list
				// console.log(el.data.list)
		}
	}
})

export default store;
	

