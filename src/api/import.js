import $http from '@/utils/http';

const importService = {
  list(params) {
    return $http.get('/log_import/page', params);
  },
  statistics(params) {
    return $http.post('/clinic/statics/count', params);
  }
};

export default importService;
