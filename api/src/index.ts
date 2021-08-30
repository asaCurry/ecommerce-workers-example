import Products from './handlers/products'
import NotFound from './handlers/notfound'

import { json,corsHeaders } from './helpers'

addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(router(event))
  })
  
  const router = async (event: FetchEvent) => {
    if (event.request.method === "OPTIONS") {
      return new Response('OK', { status: 204, headers: corsHeaders })
    }
  
    const url = new URL(event.request.url)
  
    let resp: Response | Promise<Response>;
  
    switch (url.pathname) {
      /* prevent console error from attempting to load favicon */
        case '/favicon.ico':
            resp = json('no favicon found')
            break
        case '/api/products':
            resp = Products(event.request)
            break
        case '/orders':
            resp = json('no orders found')
            break
        case '/api':
            resp = json('please use a valid api endpoint')
            break
        default:
            resp = json('no data')
            break
    }
  
    return resp
  }