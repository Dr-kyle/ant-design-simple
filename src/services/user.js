import request from '@/utils/request';
import { getToken } from '@/utils/cookies';

export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}

// custom
export async function getUserByToken() {
  return request(`/api/user?token=${getToken()}`)
}
