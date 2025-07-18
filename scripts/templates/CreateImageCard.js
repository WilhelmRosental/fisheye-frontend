/**
 * Classe pour créer une carte média image.
 */
class CreateImageCard {
  constructor(likeId) {
    this._likeId = likeId
    this.$mediaContainer = document.querySelector('.media-container')
  }

  /**
   * Crée la carte image pour un photographe.
   * @param {Object} photographer - Les données du photographe.
   * @returns {HTMLElement}
   */
  createMedia(photographer) {
    const article = document.createElement('article')
    article.classList.add('media-card')
    const img = document.createElement('img')
    img.src = photographer.picture
    img.alt = `Photo ${photographer.title}`
    img.classList.add('media-card__img')
    img.tabIndex = 0
    img.onclick = function() { lightbox.listenerLightbox(this) }
    const textDiv = document.createElement('div')
    textDiv.classList.add('media-card__text')
    const title = document.createElement('h3')
    title.classList.add('media-card__title')
    title.textContent = photographer.title
    const counterLike = document.createElement('p')
    counterLike.classList.add('media-card__counterLike')
    counterLike.id = `nbrLike${this._likeId}`
    counterLike.textContent = photographer.likes
    const label = document.createElement('label')
    label.htmlFor = `like${this._likeId}`
    label.classList.add('media-card__label')
    label.tabIndex = 0
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.id = `like${this._likeId}`
    input.classList.add('media-card__checkbox')
    const spanBtn = document.createElement('span')
    spanBtn.classList.add('media-card__btnLike')
    spanBtn.role = 'button'
    const spanSr = document.createElement('span')
    spanSr.classList.add('sr-only')
    spanSr.textContent = 'Boutton pour ajouter ou enlever un like'
    spanBtn.appendChild(spanSr)
    label.appendChild(input)
    label.appendChild(spanBtn)
    textDiv.appendChild(title)
    textDiv.appendChild(counterLike)
    textDiv.appendChild(label)
    article.appendChild(img)
    article.appendChild(textDiv)
    this.$mediaContainer.appendChild(article)
    return this.$mediaContainer
  }
}
