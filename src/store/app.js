const app = {
  state: {
    hospitalId: null,
    userId: null
  },
  mutations: {
    HOSPITALID(state, data) {
      state.hospitalId = data;
    },
    USERID(state, data) {
      state.userId = data;
    }
  },
  actions: {
    hospitalId({ commit }, data) {
      commit('HOSPITALID', data)
    },
    userId({ commit }, data) {
      commit('USERID', data)
    }
  }
};

export default app;
