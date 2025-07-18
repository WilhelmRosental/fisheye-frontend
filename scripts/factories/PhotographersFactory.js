class PhotographersFactory {
  /**
   * @param {Object} data - Les données à traiter.
   * @param {string} type - Le type d'entité à créer.
   * @returns {Array|Error} Un tableau d'instances ou une erreur si le type est inconnu.
   */
  constructor(data, type) {
    if (type === 'photographers') {
      return data.photographers.map((data) => new PhotographerProfil(data))
    } else {
      throw new Error('Unknown type format')
    }
  }
}
