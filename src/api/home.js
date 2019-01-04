import $http from '@/utils/http';

const HomeService = {
  getArticleList(params) {
    return $http.get('/article/list', params);
  }
};

export default HomeService;
