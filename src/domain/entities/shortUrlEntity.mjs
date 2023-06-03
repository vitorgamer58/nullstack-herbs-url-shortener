import herbarium from '@herbsjs/herbarium'
import herbs from '@herbsjs/herbs'

const { entity, id, field } = herbs

const ShortUrlEntity = entity('ShortUrlEntity', {
  id: id(Number),
  url: field(String, { validation: { presence: true } }),
  shortUrl: field(String),
})

herbarium.herbarium.entities.add(ShortUrlEntity, 'ShortUrlEntity')

export default ShortUrlEntity
