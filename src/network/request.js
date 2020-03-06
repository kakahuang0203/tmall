import axios from 'axios'

export function request (config) {
  const post = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000
  })
  // 发送
  return post(config)
}
