import axios from "axios";
import Qs from "qs";
import { Message } from 'element-ui';
import store from '@/store';

let instance = axios.create({
  baseURL: "/api/",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

instance.interceptors.request.use(function (config) {
  const url = config.url;

  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  if (response.data.ret !== 1) {
    Message({
      showClose: true,
      message: response.data.tip,
      type: 'error',
      duration: 3000
    });
  }

  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default {
  get(url, params) {
    return instance.get(
      url, { params }
    ).then(rs => (rs));
  },
  post(url, data) {
    return instance.post(
      url, Qs.stringify(data)
    ).then(rs => (rs));
  },
  put(url, data) {
    return instance.put(
      url, Qs.stringify(data)
    ).then(rs => (rs));
  },
  delete(url, params) {
    return instance.delete(
      url, { params }
    ).then(rs => (rs));
  }
};