import { HttpVerb, RequestParams } from './types'
import { camelizeKeys, snakelizeKeys } from '../';


export const getCsrfToken = () => {
  const metaElement = document.querySelector('meta[name="csrf-token"]')

  if (metaElement instanceof HTMLMetaElement) {
    return metaElement.content
  }
}

const buildRequest = async(
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

    request.body = JSON.stringify(snakelizeKeys(data))
  }

  const response = await fetch(url, request)
  if (!response.ok) throw new Error(`Request to ${response.url} failed with status ${response.status} - ${response.statusText}`)

  const jsonResult = await response.json();
  return camelizeKeys(jsonResult);
}

export const  get= (url: string) => buildRequest(url, 'GET')
export const  post= (url: string, data: {}) => buildRequest(url, 'POST', data)
export const  put= (url: string, data: {}) => buildRequest(url, 'PUT', data)
export const  del= (url: string) => buildRequest(url, 'DELETE')

