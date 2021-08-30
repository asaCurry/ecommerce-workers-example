import { json } from '../helpers'

export default async (request: Request) => {
    // const body = await request.json()

    return json(`products api: ${request.url}`)
}