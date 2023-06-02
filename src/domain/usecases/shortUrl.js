import { Err, Ok, request, step, usecase } from '@herbsjs/herbs'

import URL from '../entities/shortUrlRequest'
import { createShortId } from '../helpers/createShortUrl'

const dependency = {}

const shortUrl = (injection) =>
  usecase('Short an URL', {
    request: request.from(URL, { ignoreIds: true }),

    authorize: (_) => Ok(),

    setup: (ctx) => {
      ctx.di = Object.assign({}, dependency, injection)
      ctx.data = {}
    },

    'Verify the request': step((ctx) => {
      const url = ctx.req

      if (!url.isValid()) {
        return Err.invalidEntity({
          message: 'invalid url',
          payload: { entity: URL },
          cause: url.errors,
        })
      }
      return Ok()
    }),

    'Create the URL id and save in database': step((ctx) => {
      const url = ctx.req

      const shortedId = createShortId(url.url, '')

      ctx.data.shortId = shortedId
      return Ok()
    }),

    'Return the shorted url': step((ctx) => {
      const url = ctx.req
      const { shortId } = ctx.data

      url.shortUrl = `dhdhsdssd/${shortId}`

      ctx.ret = url

      return Ok()
    }),
  })

export default { shortUrl }
