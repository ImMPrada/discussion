import { HttpVerb, RequestParams } from './types'

const getCsrfToken = () => {
  const metaElement = document.querySelector('meta[name="csrf-token"]')

  if (metaElement instanceof HTMLMetaElement) {
    return metaElement.content
  }
}

const buildRequest = (
  url: string,
  method: HttpVerb,
  data: object = {}) => {
  const request: RequestParams | any = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (method !== 'GET') {
    request.headers['X-CSRF-Token'] = getCsrfToken();

    request.body = JSON.stringify(data)
  }

  return fetch(url, request)
}

const http: any = {
  getCsrfToken: () => getCsrfToken(),
  get: (url: string) => buildRequest(url, 'GET'),
  post: (url: string, data: {}) => buildRequest(url, 'POST', data),
  put: (url: string, data: {}) => buildRequest(url, 'PUT', data),
  del: (url: string) => buildRequest(url, 'DELETE')
}

export default http
