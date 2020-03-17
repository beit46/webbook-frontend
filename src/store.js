import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    websites: [
      {
        id: 0,
        name: 'Moto GP',
        url: 'http://motogp.com/',
        created_at: '2019-09-08T08:02:17-05:00',
      },
      {
        id: 1,
        name: 'Snowboarder',
        url: 'https://www.snowboarder.com/',
        created_at: '2015-09-08T08:02:17-05:00',
      },
      {
        id: 2,
        name: 'Tech Review',
        url: 'https://www.technologyreview.com/',
        created_at: '2010-09-08T08:02:17-05:00',
      },

    ],
  },
  getters: {
    websites: state => state.websites,
  },
  mutations: {
    set(state, website) {

      const lastId = Math.max.apply(null, state.websites.map( w => w.id));
      let w = {
        id : lastId + 1,
        name: website.name,
        url: website.url,
        created_at: moment().toISOString(),
      }
      
      state.websites.push(w);
    },

    unset(state, website) {
      state.websites = state.websites.filter(w => w.id != website.id);
    },
  },
  actions: {
    create({ commit, state }, website) {
      commit('set', website);
    },

    delete({ commit, state }, website) {
      commit('unset', website);
    },
  },
});
