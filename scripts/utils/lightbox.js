/**
 * Classe représentant une lightbox pour afficher des images et vidéos en plein écran.
 * Gère l'affichage, la navigation, l'accessibilité et la fermeture de la lightbox.
 */
class Lightbox {
  /**
   * Crée une instance de Lightbox.
   */
  constructor() {
    this.$body = document.querySelector('body')
    this.$mainDom = document.querySelector('main')
    this.$wrapper = document.createElement('div')
    this.$wrapper.classList.add('lightbox-container')
    this.keyUpHandler = this.handleKeyPress.bind(this)
    this._index = 0
    this._indexLenght = 0
  }

  /**
   * Tableau statique contenant les données des médias à afficher dans la lightbox.
   * @type {Array<{title: string, picture: string, formatPicture: string}>}
   */
  static data = []

  /**
   * Crée la lightbox et l'affiche dans le DOM.
   * @param {number} index - L'index du média à afficher dans la lightbox.
   */
  createLightbox(index) {
    const lightboxCreate = `
        <button onclick="lightbox.closeLightbox()" class="lightbox-close">
        <span class="sr-only">Fermer le caroussel</span>
        </button>
        <div class="lightbox">
          <button class="lightbox-prev" onclick="lightbox.prevMedia()">
              <span class="sr-only">Image précédente</span>
          </button>
          <div class="lightbox-media">
              <div class="lightbox-img"></div>
              <h2 class="lightbox-title"></h2>
          </div>
          <button class="lightbox-next" onclick="lightbox.nextMedia()">
              <span class="sr-only">Image suivante</span>
          </button>
        </div>
    `
    this.$wrapper.innerHTML = lightboxCreate
    this.$mainDom.appendChild(this.$wrapper)
    this.createMediaFormat(index)
    this.openLightbox()
  }

  /**
   * Ouvre la lightbox, gère l'accessibilité et le focus.
   */
  openLightbox() {
    const $lightbox = document.querySelector('.lightbox-container')
    $lightbox.setAttribute('aria-hidden', 'false')
    this.$mainDom.setAttribute('aria-hidden', 'true')
    this.$body.classList.add('no-scroll')
    const closeBtn = document.querySelector('.lightbox-close')
    closeBtn.focus()
  }

  /**
   * Ferme la lightbox, restaure l'état du DOM et retire les écouteurs d'événements.
   */
  closeLightbox() {
    const $lightbox = document.querySelector('.lightbox-container')
    if ($lightbox) {
      $lightbox.remove()
    } else {
      console.error('L élément n a pas été trouvé.')
    }
    this.$body.classList.remove('no-scroll')
    this.$mainDom.setAttribute('aria-hidden', 'false')
    document.removeEventListener('keydown', this.keyUpHandler)
  }

  /**
   * Gère les événements clavier dans la lightbox (navigation, fermeture, tabulation).
   * @param {KeyboardEvent} e - L'événement clavier déclenché.
   */
  handleKeyPress(e) {
    const $lightbox = document.querySelector('.lightbox-container')
    const focusElements = $lightbox.querySelectorAll('button')
    const focusElementsArray = Array.from(focusElements)
    const firstFocusElement = focusElementsArray[0]
    const lastFocusElement = focusElementsArray[focusElementsArray.length - 1]
    if (
      $lightbox.getAttribute('aria-hidden') === 'false' &&
      e.key === 'Escape'
    ) {
      this.closeLightbox()
      e.preventDefault()
    } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
      this.nextMedia()
      e.preventDefault()
    } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      this.prevMedia()
      e.preventDefault()
    } else if (e.key === 'Tab' || e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusElement) {
          e.preventDefault()
          lastFocusElement.focus()
        }
      } else {
        if (document.activeElement === lastFocusElement) {
          e.preventDefault()
          firstFocusElement.focus()
        }
      }
    } else {
      if (e.key === 'Enter') return
      e.preventDefault()
    }
  }

  /**
   * Gère l'ouverture de la lightbox sur un média donné.
   * @param {HTMLElement} data - L'élément média sur lequel l'utilisateur a cliqué.
   */
  listenerLightbox(data) {
    const allMedia = document.querySelectorAll('.media-card__img')
    const allMediaArray = [...allMedia]
    const searchIndex = allMediaArray.findIndex((e) => e === data)
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
    this._indexLenght = allMediaArray.length
    this._index = searchIndex
    this.createLightbox(searchIndex)
    document.addEventListener('keydown', this.keyUpHandler)
  }

  /**
   * Affiche le média précédent dans la lightbox.
   */
  prevMedia() {
    const prevBtn = document.querySelector('.lightbox-prev')
    prevBtn.focus()
    this._index = this._index - 1
    if (this._index < 0) {
      this._index = this._indexLenght - 1
    }
    setTimeout(() => {
      this.createMediaFormat(this._index)
    }, 100)
  }

  /**
   * Affiche le média suivant dans la lightbox.
   */
  nextMedia() {
    const nextBtn = document.querySelector('.lightbox-next')
    nextBtn.focus()
    this._index = this._index + 1
    if (this._index > this._indexLenght - 1) {
      this._index = 0
    }
    setTimeout(() => {
      this.createMediaFormat(this._index)
    }, 100)
  }

  /**
   * Crée et affiche le format du média (image ou vidéo) dans la lightbox.
   * @param {number} index - L'index du média à afficher.
   * @throws Affiche une erreur dans la console si le format est inconnu.
   */
  createMediaFormat(index) {
    const $lightboxTitle = document.querySelector('.lightbox-title')
    $lightboxTitle.textContent = Lightbox.data[index].title
    const $lightboxIMG = document.querySelector('.lightbox-img')
    $lightboxIMG.innerHTML = ''
    let format = Lightbox.data[index].formatPicture
    if (format === 'image') {
      const createPicture = `
        <img
            class="lightbox-picture"
            src="${Lightbox.data[index].picture}"
            alt="Image ${Lightbox.data[index].title}"
        />
      `
      $lightboxIMG.innerHTML = createPicture
    } else if (format === 'video') {
      const createPicture = `
        <video
            class="lightbox-picture"
            src="${Lightbox.data[index].picture}"
            alt="Vidéo ${Lightbox.data[index].title}"
            controls>
        </video>
      `
      $lightboxIMG.innerHTML = createPicture
    } else {
      throw console.log('Format inconnu ni video ou image')
    }
  }

  /**
   * Attache l'instance de la lightbox à l'objet global window pour un accès global.
   */
  attachWindow() {
    window.lightbox = this
  }
}
