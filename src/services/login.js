import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function getThirdUrl(type = 'myauth') {
  console.log('service getThirdUrl', type)
  return request(`/api/oauth/render/${type}`);
}

export async function getServerToken(type = 'myauth', params) {
  return request(`/api/oauth/callback/myauth`, {
    params
  })
}
