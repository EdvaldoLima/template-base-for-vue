import Http from '.';
const { VUE_APP_API_URL, VUE_APP_API_REQUEST_TIMEOUT } = process.env;
const fiveSecondsTimeout = 5000;

const defaultApi = new Http({
  baseURL: VUE_APP_API_URL,
  timeout: VUE_APP_API_REQUEST_TIMEOUT || fiveSecondsTimeout,
});

export default defaultApi;
