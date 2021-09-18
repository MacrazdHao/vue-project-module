import Vue from 'vue';
import Vuex from 'vuex';

import activity from './activity';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    activity,
  }
});