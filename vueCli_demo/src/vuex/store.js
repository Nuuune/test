import Vue from 'vue'
import Vuex from  'vuex'
import {UPDATALIST} from './mutation-types'
import CHAT from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
	  datalist: CHAT.msgo,
	  fontlist: ["yah","sans","momo"],
	  colorlist: ["red","yellow","pink","gray","blue","black","white","white","white","white","white","white","white","white"]
	},
	mutations: {
		[UPDATALIST] (state, payload) {
		  state.datalist.push(payload.item)
		}
	},
	actions: {
		updata ({commit}, payload) {
		  if(payload.item.message) {
			  commit('UPDATALIST', payload)
			}	
		}
	}
})