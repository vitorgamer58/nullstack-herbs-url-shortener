import Nullstack from 'nullstack'

import shortUrl from '../domain/usecases/shortUrl.mjs'
import UrlsRepository from '../infra/repositories/urlsRepository.mjs'

class ShortUrlComponent extends Nullstack {

  url = ""
  shortedUrl = ''

  static async shortUrl({ secrets, url }) {
    try {
      const urlsRepository = new UrlsRepository(secrets.mongodbUri, secrets.databaseName)
      const injection = {
        config: {
          baseURL: secrets.baseUrl,
        },
        urlsRepository,
      }

      const usecase = shortUrl(injection)

      await usecase.authorize()

      const ucResponse = await usecase.run({
        url,
      })

      console.log(usecase.auditTrail)

      if (ucResponse.isOk) return ucResponse.ok.shortUrl
      return null
    } catch (error) {
      console.log(error)
    }
  }

  async postShortUrl() {
    this.shortedUrl = await this.shortUrl({ url: this.url })
  }

  updateUrl({ event }) {
    this.url = event.target.value
  }

  render() {
    return (
      <form>
        <input type="text" name="url" value={this.url} oninput={this.updateUrl} />
        <button onclick={this.postShortUrl}>SHORT URL</button>
        {this.shortedUrl ? (
          <>
            <p>URL Encurtada:</p>
            <a href={this.shortedUrl} target="_blank" rel="noopener noreferrer">
              {this.shortedUrl}
            </a>
          </>
        ) : null}
      </form>
    )
  }

}

export default ShortUrlComponent
