import herbs from '@herbsjs/herbs'

const { Err, Ok, step, usecase, checker } = herbs

const dependency = {}

const getLongUrl = (injection) =>
  usecase('Short an URL', {
    request: {
      shortId: String,
    },

    authorize: (_) => Ok(),

    setup: (ctx) => {
      ctx.di = Object.assign({}, dependency, injection)
      ctx.data = {}
    },

    'Verify the request': step((ctx) => {
      const { shortId } = ctx.req

      if (shortId === undefined) {
        return Err.invalidArguments({
          message: 'Missing shortId',
        })
      }

      return Ok()
    }),

    'Get long URL from database and return': step(async (ctx) => {
      const { shortId } = ctx.req
      const { urlsRepository } = ctx.di

      const longUrl = await urlsRepository.find({ filter: { short_id: shortId } })

      if (!checker.isEmpty(longUrl)) {
        ctx.ret.longUrl = longUrl[0].longUrl
        return Ok()
      }

      return Err.notFound()
    }),
  })

export default getLongUrl
