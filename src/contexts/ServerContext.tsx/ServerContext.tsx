import { createContext, useState } from 'react';
import { camelizeKeys, http, snakelizeKeys } from '../../utils';


export const ServerContext = createContext(null);

export const ServerProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false)

  const responseCallback = (data: any) => {
    const camelizedData = camelizeKeys(data)

    return new Promise(resolve => resolve(camelizedData))
  }

  const methods: any = {};
  ["get", "post", "put", "del"].forEach(method => {
    methods[method] = async (url:  string, data: any) => {
      const response = await http[method](url, snakelizeKeys(data))

      if (!response.ok) throw new Error(`Request to ${response.url} failed with status ${response.status} - ${response.statusText}`)

      const jsonResult = await response.json();
      return responseCallback(jsonResult);
    }
  })

  const contextVal = {
    loading,
    setLoading,

    ...methods
  }

  return (
    <ServerContext.Provider value={contextVal}>
      {children}
    </ServerContext.Provider>
  )
}