class Api {
  /**
   * @param {string} url - L'URL de l'API.
   */
  constructor(url) {
    this._url = url
  }

  /**
   * Effectue une requête GET pour récupérer les données.
   * @async
   * @returns {Promise<Object|null>} Les données JSON ou null en cas d'erreur.
   */
  async get() {
    try {
      const res = await fetch(this._url)
      return await res.json()
    } catch (err) {
      console.error('Une erreur est survenue', err)
      return null
    }
  }
}

/**
 * Classe pour récupérer les données des photographes via l'API.
 * @extends Api
 */
class PhotographerApi extends Api {
  /**
   * @param {string} url - L'URL de l'API des photographes.
   */
  constructor(url) {
    super(url)
  }
  /**
   * Récupère les données des photographes.
   * @async
   * @returns {Promise<Object|null>} Les données JSON ou null en cas d'erreur.
   */
  async getPhotographers() {
    return await this.get()
  }
}
