import Vue from 'vue'
import App from '@/App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  MsgRight:[],
};

const getters = {
};

const mutations= {
   getMsgRight(state,pro){
     state.MsgRight = pro;
   }
};

const actions = {
  axiostest(context,array){
    context.commit('getMsgRight',array);
  },
};

export default new Vuex.Store({
  state,getters,mutations,actions
})
