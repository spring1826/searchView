import axios from "axios";

const DefaultAxios = axios.create({
  baseURL: process.env.REACT_APP_DEFAULT_URL,
  // `timeout`은 요청이 타임 아웃되는 밀리 초(ms)를 설정합니다.
  // 요청이`timeout` 설정 시간보다 지연될 경우, 요청은 중단됩니다.
  timeout: 1000,
});

export default DefaultAxios;
