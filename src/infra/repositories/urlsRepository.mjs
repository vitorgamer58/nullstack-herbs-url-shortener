import herbs2mongo from '@herbsjs/herbs2mongo'

import ShortUrlEntity from '../../domain/entities/shortUrlEntity.mjs'
import connection from '../database/connection.mjs'

const { Repository } = herbs2mongo

class UrlsRepository extends Repository {

  constructor(connectionUri, databaseName) {
    super({
      entity: ShortUrlEntity,
      collection: 'shorted_urls',
      ids: ['id'],
      mongodb: connection(connectionUri, databaseName),
    })
  }

}

export default UrlsRepository
