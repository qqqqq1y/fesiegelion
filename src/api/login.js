import $http from '@/utils/http';

const loginService = {
  login(params) {
    return $http.post('/login_user/login', params);
  },
  loginOut(params) {
    return $http.post('/login_user/logout', params);
  }
};

export default loginService;
