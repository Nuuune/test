import Vue from 'vue'
import Vuex from  'vuex'
import {UPDATALIST} from './mutation-types'
import CHAT from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
	  datalist: CHAT.msgo
	  // [{name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong', img: '#'},
   //      { name: 'zhz', time: '15:30', message: 'wo shi zhu hao zheng', img: '#'}]
	},
	mutations: {
		UPDATALIST: function (state, payload) {
		  state.datalist.push(payload.item)
		}
	},
	actions: {
		updata: function (context, payload) {
		  if(payload.item.message) {
			  context.commit('UPDATALIST', payload)
			}	
		}
	}
})