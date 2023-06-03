import Nullstack from 'nullstack'

import Application from './src/Application'

const context = Nullstack.start(Application)

const dbInstance = null

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
  const { secrets } = context

  /* const databaseClient = await new MongoClient(secrets.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).connect()

  context.database = await databaseClient.db(secrets.databaseName) */

  /* if (dbInstance) {
    // eslint-disable-next-line no-promise-executor-return
    context.dbInstance = dbInstance
  }

  const client = await new MongoClient(secrets.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).connect()

  dbInstance = client.db(secrets.databaseName)
  context.dbInstance = dbInstance */
}

export default context
