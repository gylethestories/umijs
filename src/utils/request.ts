import request from 'umi-request';
import { message } from 'antd';
// request interceptor, change url or options.
request.interceptors.request.use((url, options) => {
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: { Hello: 'hello' } },
  };
});

// response interceptor, chagne response
request.interceptors.response.use((response, options) => {
  response.headers.append('interceptors', 'yes yo');
  return response;
});

// handling error in response interceptor
request.interceptors.response.use((response) => {
  if (response.status > 400) {
    const codeMaps = {
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
    };
    message.error(codeMaps[response.status]);
  }

  return response;
});

export default request;
