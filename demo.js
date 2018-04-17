const DatArchive = require('./DatArchive')
const DefaultManager = require('./DefaultManager')
const idb = require('random-access-idb')

class PersistantManager extends DefaultManager {
  constructor () {
    super('gateway.mauve.moe:3000')
  }

  getStorage (key) {
    return idb(`dat://${key}/`)
  }
}

DatArchive.setManager(new PersistantManager())

window.DatArchive = DatArchive