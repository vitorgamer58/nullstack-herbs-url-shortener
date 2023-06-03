import herbs from '@herbsjs/herbs'

import ShortUrlEntity from '../entities/shortUrlEntity.mjs'
import { createShortId } from '../helpers/createShortUrl.mjs'

const { Err, Ok, step, usecase } = herbs

const dependency = {}

const shortUrl = (injection) =>
  usecase('Short an URL', {
    request: {
      url: String,
    },

    authorize: (_) => Ok(),

    setup: (ctx) => {
      ctx.di = Object.assign({}, dependency, injection)
      ctx.data = {}
    },

    'Verify the request': step((ctx) => {
      const { url } = ctx.req
      const shortUrlEntity = new ShortUrlEntity()

      shortUrlEntity.id = Math.floor(Math.random() * 100000)
      shortUrlEntity.url = url

      if (!shortUrlEntity.isValid()) {
        return Err.invalidEntity({
          message: 'invalid url',
          payload: { entity: ShortUrlEntity },
          cause: shortUrlEntity.errors,
        })
      }

      ctx.data.shortUrlEntity = shortUrlEntity
      return Ok()
    }),

    'Create the URL id, save in database and return': step(async (ctx) => {
      const { shortUrlEntity } = ctx.data
      const { urlsRepository } = ctx.di
      const { baseURL } = ctx.di.config

      const shortedId = createShortId(shortUrlEntity.url)

      shortUrlEntity.shortUrl = `${baseURL}/${shortedId}`

      await urlsRepository.insert(shortUrlEntity)

      ctx.ret = shortUrlEntity
      return Ok()
    }),
  })

export default shortUrl
