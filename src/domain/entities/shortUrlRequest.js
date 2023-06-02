import { herbarium } from '@herbsjs/herbarium'
import { entity, field, id } from '@herbsjs/herbs'

const ShortUrlRequest = entity('ShortUrlRequest', {
  id: id(),
  url: field(String, { validation: { presence: true } }),
  shortUrl: field(String),
})

export default herbarium.entities.add(ShortUrlRequest, 'ShortUrlRequest').entity
