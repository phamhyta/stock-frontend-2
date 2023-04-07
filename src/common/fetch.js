import axios from 'axios'

export function callApiget(url, params = null, headers = {}) {

  headers = {
    ...headers,
  }

  return axios({
    method: 'get',
    url,
    params,
    headers
  })
}

export function callApipost(url, params, body, headers = {}) {

  headers = {
    ...headers,
  }

  return axios({
    method: 'post',
    url,
    params,
    headers,
    data: body
  })
}