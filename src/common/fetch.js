import axios from 'axios'

export async function callApiget(url, params = null, headers = {}) {

  headers = {
    ...headers,
  }

  return await axios({
    method: 'get',
    url,
    params,
    headers
  })
}

export async function callApipost(url, params, body, headers = {}) {

  headers = {
    ...headers,
  }

  return await axios({
    method: 'post',
    url,
    params,
    headers,
    data: body
  })
}