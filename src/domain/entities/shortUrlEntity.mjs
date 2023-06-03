import herbarium from '@herbsjs/herbarium'
import herbs from '@herbsjs/herbs'

const { entity, id, field } = herbs

const ShortUrlEntity = entity('ShortUrlEntity', {
  id: id(Number),
  longUrl: field(String, { validation: { presence: true } }),
  shortId: field(String),
})

herbarium.herbarium.entities.add(ShortUrlEntity, 'ShortUrlEntity')

export default ShortUrlEntity
