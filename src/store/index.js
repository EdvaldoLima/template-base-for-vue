import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Modules
import HomeStore from './HomeStore';

export default new Vuex.Store({
  modules: {
    HomeStore,
  },
});
