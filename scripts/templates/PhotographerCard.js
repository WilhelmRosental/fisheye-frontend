/**
 * Classe représentant la carte d'un photographe.
 */
class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer
    this.$wrapper = document.createElement('article')
    this.$wrapper.classList.add('user-card')
  }

  get photographer() {
    return this._photographer
  }

  /**
   * Crée la carte du photographe.
   * @returns {HTMLElement}
   */
  createPhotographerCard() {
    const article = document.createElement('article')
    article.classList.add('user-card')
    const header = document.createElement('header')
    header.classList.add('user-card__header')
    const link = document.createElement('a')
    link.href = this._photographer.url
    link.classList.add('user-card__link')
    link.setAttribute('role', 'navigation')
    link.setAttribute('aria-label', `Lien vers la page de ${this._photographer.name}`)
    const img = document.createElement('img')
    img.classList.add('user-card__picture')
    img.src = this._photographer.portrait
    img.alt = `Photo de ${this._photographer.name}`
    const h2 = document.createElement('h2')
    h2.classList.add('user-card__name')
    h2.textContent = this._photographer.name
    link.appendChild(img)
    link.appendChild(h2)
    header.appendChild(link)
    article.appendChild(header)
    const section = document.createElement('section')
    section.classList.add('user-card__paragraph')
    const pLoc = document.createElement('p')
    pLoc.classList.add('user-card__localization')
    pLoc.textContent = `${this._photographer.city}, ${this._photographer.country}`
    const pTag = document.createElement('p')
    pTag.classList.add('user-card__tagline')
    pTag.textContent = this._photographer.tagline
    const pPrice = document.createElement('p')
    pPrice.classList.add('user-card__price')
    pPrice.textContent = `${this._photographer.price}€/jour`
    section.appendChild(pLoc)
    section.appendChild(pTag)
    section.appendChild(pPrice)
    article.appendChild(section)
    return article
  }
}
