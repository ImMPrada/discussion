export type HttpVerb = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' ;

export interface RequestParams extends RequestInit {
  method: HttpVerb;
  headers: HeadersInit;
  body?: string;
}
