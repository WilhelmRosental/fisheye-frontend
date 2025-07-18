class PhotographerProfil {
  /**
   * @param {Object} data - Les données du photographe.
   */
  constructor(data) {
    this._name = data.name
    this._portrait = data.portrait
    this._city = data.city
    this._country = data.country
    this._tagline = data.tagline
    this._price = data.price
    this._url = 'photographer.html'
  }

  /**
   * @returns {string} Le nom du photographe.
   */
  get name() {
    return this._name
  }

  /**
   * @returns {string} Le chemin du portrait du photographe.
   */
  get portrait() {
    // On force l'extension .webp car les fichiers existent en .webp
    const base = this._portrait ? this._portrait.replace(/\.[^/.]+$/, "") : "account";
    return `assets/photographers/${base}.webp`
  }

  /**
   * @returns {string} La ville du photographe.
   */
  get city() {
    return this._city
  }

  /**
   * @returns {string} Le pays du photographe.
   */
  get country() {
    return this._country
  }

  /**
   * @returns {string} La phrase d'accroche du photographe.
   */
  get tagline() {
    return this._tagline
  }

  /**
   * @returns {number} Le prix du photographe.
   */
  get price() {
    return this._price
  }

  /**
   * @returns {string} L'URL de la page du photographe.
   */
  get url() {
    return `./${this._url}?user=${this._name}`
  }
}
