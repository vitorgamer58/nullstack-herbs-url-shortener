import Nullstack from 'nullstack'

import getLongUrl from './domain/usecases/getLongUrl.mjs'

class Short extends Nullstack {

  isErro = false

  static async getLongUrl({ shortId, urlsRepository, config }) {
    try {
      const injection = {
        config,
        urlsRepository,
      }

      const usecase = getLongUrl(injection)

      await usecase.authorize()

      const ucResponse = await usecase.run({
        shortId,
      })

      console.log(usecase.auditTrail)

      if (ucResponse.isOk) return ucResponse.ok
      if (ucResponse.isNotFoundError) return { notFound: true }
    } catch (error) {
      console.log(error)
    }
  }

  async initiate({ params, router }) {
    const shortId = params.shortId

    if (shortId === '') {
      return (router.path = '/')
    }

    const result = await this.getLongUrl({ shortId })

    if (result.notFound) this.isErro = true
    if (result) return (router.url = result.longUrl)
  }

  render() {
    return (
      <>
        {this.isErro ? (
          <>
            <h1>Not found</h1>
          </>
        ) : null}
      </>
    )
  }

}

export default Short
