import herbs from '@herbsjs/herbs'

import ShortUrlRequest from '../entities/shortUrlRequest.mjs'
import { createShortId } from '../helpers/createShortUrl.mjs'

const { Err, Ok, request, step, usecase } = herbs

const dependency = {}

const shortUrl = (injection) =>
  usecase('Short an URL', {
    request: request.from(ShortUrlRequest, { ignoreIds: true }),

    authorize: (_) => Ok(),

    setup: (ctx) => {
      ctx.di = Object.assign({}, dependency, injection)
      ctx.data = {}
    },

    'Verify the request': step((ctx) => {
      const shortUrlRequest = ctx.req

      if (!shortUrlRequest.isValid()) {
        return Err.invalidEntity({
          message: 'invalid url',
          payload: { entity: ShortUrlRequest },
          cause: shortUrlRequest.errors,
        })
      }
      return Ok()
    }),

    'Create the URL id and save in database': step((ctx) => {
      const shortUrlRequest = ctx.req

      const shortedId = createShortId(shortUrlRequest.url, '')

      ctx.data.shortId = shortedId
      return Ok()
    }),

    'Return the shorted url': step((ctx) => {
      const shortUrlRequest = ctx.req
      const { shortId } = ctx.data

      shortUrlRequest.shortUrl = `dhdhsdssd/${shortId}`

      ctx.ret = shortUrlRequest

      return Ok()
    }),
  })

export default shortUrl
