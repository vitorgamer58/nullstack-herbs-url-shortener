import Nullstack from 'nullstack'

import Application from './src/Application'
import UrlsRepository from './src/infra/repositories/urlsRepository.mjs'

const context = Nullstack.start(Application)

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
  const { secrets } = context

  context.urlsRepository = new UrlsRepository(secrets.mongodbUri, secrets.databaseName)
  context.config = {
    baseURL: secrets.baseUrl,
  }
}

export default context
