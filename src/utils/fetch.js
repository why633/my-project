/*
* @Description: fetch request
* @Author: why
* @Date: 2019-10-24
*/
const apiRootUrl = 'http://192.168.88.111:9000'
function request (method, url, body) {
  method = method.toUpperCase();
  if (method === 'GET') {
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }

  return fetch(apiRootUrl + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      return Promise.reject('请求失败！');
    }
  })
}

export const _get = path => request('GET', path);
export const _post = (path, body) => request('POST', path, body);
export const _put = (path, body) => request('PUT', path, body);
export const _del = (path, body) => request('DELETE', path, body);