import HomeService from '@/api/home';

const app = {
  state: {
    searchArticle: {
      webSiteId: 1
    },
    articleList: []
  },
  mutations: {
    ADD_ARTICLELIST(state, data) {
      state.articleList = data;
    },
    ADD_SEARCHARTICLE(state, searchData) {
      state.searchArticle = {
        ...searchData
      };
    }
  },
  actions: {
    getArticleList({ commit }, key) {
      const params = {
        webSiteId: key
      };

      HomeService.getArticleList(params).then((res) => {
        commit('ADD_ARTICLELIST', res.data);
        commit('ADD_SEARCHARTICLE', params);
      });
    }
  }
};

export default app;
