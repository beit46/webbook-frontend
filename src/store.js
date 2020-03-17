import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    websites: [
      {
        id: 0,
        name: 'Moto GP',
        url: 'http://motogp.com/',
      },
      {
        id: 1,
        name: 'Snowboarder',
        url: 'https://www.snowboarder.com/',
      },
      {
        id: 2,
        name: 'Tech Review',
        url: 'https://www.technologyreview.com/',
      },

    ],
  },
  getters: {
    websites: state => {
      return state.websites;
    },
  },
  mutations: {
    set(state, website) {

      state.websites.push(website);
    }
  },
  actions: {
    create({ commit, state }, website) {

      //get a website and save it to our store
      context.commit('set', website);
    }
  },
});
