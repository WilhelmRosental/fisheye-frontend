/**
 * Classe représentant les informations du photographe (likes, prix).
 */
class PhotographerInfo {
  constructor() {
    this._totalLike = 0
    this.$wrapper = document.createElement('div')
    this.$wrapper.classList.add('photographer-info')
  }
  static price = ''

  /**
   * Crée l'affichage des informations du photographe.
   * @returns {HTMLElement}
   */
  createInfo() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('photographer-info')
    const likesDiv = document.createElement('div')
    likesDiv.classList.add('photographer-info__likes')
    const pLikes = document.createElement('p')
    pLikes.classList.add('photographer-info__nbrLikes')
    pLikes.textContent = this._totalLike
    const imgLike = document.createElement('img')
    imgLike.src = './assets/icons/heart-black.svg'
    imgLike.alt = 'Bouton pour ajouter ou enlver un like'
    imgLike.setAttribute('role', 'button')
    imgLike.classList.add('photographer-info__imgLike')
    likesDiv.appendChild(pLikes)
    likesDiv.appendChild(imgLike)
    const pPrice = document.createElement('p')
    pPrice.classList.add('photographer-info__price')
    pPrice.textContent = `${PhotographerInfo.price}€ / jour`
    wrapper.appendChild(likesDiv)
    wrapper.appendChild(pPrice)
    return wrapper
  }

  /**
   * Met à jour le nombre total de likes affiché pour le photographe.
   * @param {number} newTotalLikes - Le nouveau nombre total de likes à afficher.
   */
  updateInfo(newTotalLikes) {
    this._totalLike = newTotalLikes
    const $textLike = document.querySelector('.photographer-info__nbrLikes')
    $textLike.textContent = this._totalLike
  }
}
