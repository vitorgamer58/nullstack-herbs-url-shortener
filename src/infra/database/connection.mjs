import { MongoClient } from 'mongodb'

let dbInstance = null
let mongoUri
let name

async function getInstance() {
  if (dbInstance) {
    return new Promise((resolve) => resolve(dbInstance))
  }
  const client = await new MongoClient(mongoUri)
  await client.connect()
  dbInstance = client.db(name)
  return dbInstance
}

export default (connectionUri, databaseName) => {
  mongoUri = connectionUri
  name = databaseName
  return getInstance
}
