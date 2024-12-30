import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isSoundEnable: false
    };
  },
  mutations: {
    setSoundStatus(state, value) {
      state.isSoundEnable = value;
    }
  },
  actions: {
    toggleSoundStatus({ commit, state }) {
      commit('setSoundStatus', !state.isSoundEnable);
    }
  },
  getters: {
    getSoundStatus: (state) => state.isSoundEnable
  }
});

export default store;