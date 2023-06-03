import herbarium from '@herbsjs/herbarium'
import herbs from '@herbsjs/herbs'

const { entity, field } = herbs

const ShortUrlRequest = entity('ShortUrlRequest', {
  url: field(String, { validation: { presence: true } }),
  shortUrl: field(String),
})

herbarium.herbarium.entities.add(ShortUrlRequest, 'ShortUrlRequest')

export default ShortUrlRequest
