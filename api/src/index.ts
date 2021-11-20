import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

import Products from './handlers/products'
import NotFound from './handlers/notfound'
import { authorize } from './auth0'
/**
 * @param {createThing.Thing} thing
 */

import { json,corsHeaders } from './helpers'

addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(router(event))
  })
  
  const router = async (event: FetchEvent) => {
    if (event.request.method === "OPTIONS") {
      return new Response('OK', { status: 204, headers: corsHeaders })
    }


    const url = new URL(event.request.url)

    let request: Request = event.request;
    let resp: Response | Promise<Response>;

      // END OF WORKERS SITES
  
      switch (url.pathname) {
        /* prevent console error from attempting to load favicon */
          case '/auth':
            try {
              const [authorized, { authorization, redirectUrl }] = await authorize(event)
              if (authorized && authorization.accessToken) {
                request = new Request(request, {
                  headers: {
                    Authorization: `Bearer ${authorization.accessToken}`,
                  },
                })
              }
          
              // BEGINNING OF WORKERS SITES
        
              // Make sure to not touch this code for the majority of the tutorial.
              resp = getAssetFromKV(event)
            } catch (e) {
              return new Response(e.message || e.toString(), { status: 500 })
            }
            
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