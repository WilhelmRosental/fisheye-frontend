/**
 * Classe représentant un formulaire de contact affiché dans une modale.
 */
class ContactForm {
  /**
   * Crée une instance de ContactForm.
   * @param {string} userData - Le nom du photographe ou de l'utilisateur à contacter.
   */
  constructor(userData) {
    this._userData = userData
    this.$wrapper = document.createElement('div')
    this.$wrapper.classList.add('contact-modal')
    this.$body = document.querySelector('body')
    this.$insertDom = document.querySelector('.body-container')
    this.$mainDom = document.querySelector('main')
    this.createForm()
  }

  /**
   * Attache l'instance du formulaire de contact à l'objet global window.
   */
  attachWindow() {
    window.contactForm = this
  }

  /**
   * Crée et insère le DOM du formulaire de contact dans la page.
   */
  createForm() {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.setAttribute('role', 'document')
    const header = document.createElement('header')
    header.classList.add('modal-header')
    const h2 = document.createElement('h2')
    h2.id = 'modalTitle'
    h2.classList.add('modal-title')
    h2.innerHTML = `Contactez-moi <br> ${this._userData}`
    const closeBtn = document.createElement('button')
    closeBtn.onclick = () => contactForm.closeModal()
    closeBtn.classList.add('modal-close')
    closeBtn.setAttribute('aria-label', 'Fermer')
    const spanClose = document.createElement('span')
    spanClose.classList.add('sr-only')
    spanClose.textContent = 'Fermer le formulaire de contact'
    closeBtn.appendChild(spanClose)
    header.appendChild(h2)
    header.appendChild(closeBtn)
    const form = document.createElement('form')
    form.method = 'post'
    form.action = '#'
    form.classList.add('modal-form')
    form.onsubmit = (e) => contactForm.validate(e)
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('modal-fieldset')
    const labelPrenom = document.createElement('label')
    labelPrenom.htmlFor = 'prenom'
    labelPrenom.classList.add('modal-label')
    labelPrenom.textContent = 'Prénom'
    const inputPrenom = document.createElement('input')
    inputPrenom.type = 'text'
    inputPrenom.name = 'prenom'
    inputPrenom.id = 'prenom'
    inputPrenom.classList.add('modal-input')
    inputPrenom.setAttribute('aria-placeholder', 'Entrer votre prénom')
    inputPrenom.autocomplete = 'given-name'
    const labelNom = document.createElement('label')
    labelNom.htmlFor = 'nom'
    labelNom.classList.add('modal-label')
    labelNom.textContent = 'Nom'
    const inputNom = document.createElement('input')
    inputNom.type = 'text'
    inputNom.name = 'nom'
    inputNom.id = 'nom'
    inputNom.classList.add('modal-input')
    inputNom.setAttribute('aria-placeholder', 'Entrer votre nom')
    inputNom.autocomplete = 'family-name'
    const labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'email'
    labelEmail.classList.add('modal-label')
    labelEmail.textContent = 'Email'
    const inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.name = 'email'
    inputEmail.id = 'email'
    inputEmail.classList.add('modal-input')
    inputEmail.setAttribute('aria-placeholder', 'Entrer votre email')
    inputEmail.autocomplete = 'email'
    const pMessage = document.createElement('p')
    pMessage.classList.add('modal-message')
    const labelMessage = document.createElement('label')
    labelMessage.htmlFor = 'message'
    labelMessage.classList.add('modal-label')
    labelMessage.textContent = 'Message'
    const textarea = document.createElement('textarea')
    textarea.name = 'message'
    textarea.id = 'message'
    textarea.classList.add('modal-textarea')
    textarea.setAttribute('aria-placeholder', 'Entrer votre message')
    pMessage.appendChild(labelMessage)
    pMessage.appendChild(textarea)
    fieldset.appendChild(labelPrenom)
    fieldset.appendChild(inputPrenom)
    fieldset.appendChild(labelNom)
    fieldset.appendChild(inputNom)
    fieldset.appendChild(labelEmail)
    fieldset.appendChild(inputEmail)
    fieldset.appendChild(pMessage)
    const btnSubmit = document.createElement('button')
    btnSubmit.type = 'submit'
    btnSubmit.classList.add('modal-submit')
    btnSubmit.textContent = 'Envoyer'
    form.appendChild(fieldset)
    form.appendChild(btnSubmit)
    modal.appendChild(header)
    modal.appendChild(form)
    this.$wrapper.innerHTML = ''
    this.$wrapper.appendChild(modal)
    this.$wrapper.id = 'contact-modal'
    this.$wrapper.role = 'dialog'
    this.$wrapper.setAttribute('aria-labelledby', 'modalTitle')
    this.$wrapper.setAttribute('aria-label', 'Modal de contacte')
    this.$wrapper.setAttribute('tabindex', '-1')
    this.$wrapper.setAttribute('aria-hidden', 'true')
    this.$wrapper.style.display = 'none'
    this.$body.appendChild(this.$wrapper)
  }

  /**
   * Affiche la modale du formulaire de contact.
   */
  displayModal() {
    const $modal = document.getElementById('contact-modal')
    $modal.style.display = 'block'
    this.$insertDom.setAttribute('aria-hidden', 'true')
    const $modalDom = document.querySelector('.contact-modal')
    $modalDom.setAttribute('aria-hidden', 'false')
    const closeBtn = document.querySelector('.modal-close')
    closeBtn.focus()
    const classThis = this
    document.addEventListener('keydown', function (e) {
      const modal = document.getElementById('contact-modal')
      if (modal.getAttribute('aria-hidden') === 'false' && e.key === 'Escape') {
        classThis.closeModal()
      }
    })
    this.focusModal($modal)
  }

  /**
   * Gère le focus cyclique dans la modale pour l'accessibilité.
   * @param {HTMLElement} $modal - L'élément modal à gérer.
   */
  focusModal($modal) {
    const focusElements = $modal.querySelectorAll('button, input')
    const focusElementsArray = Array.from(focusElements)
    const firstFocusElement = focusElementsArray[0]
    const lastFocusElement = focusElementsArray[focusElementsArray.length - 1]
    $modal.addEventListener('keydown', function (e) {
      const isTabPressed = e.key === 'Tab' || e.keyCode === 9
      if (!isTabPressed) {
        return
      }
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
    })
  }

  /**
   * Ferme la modale du formulaire de contact et rend le contenu principal accessible.
   */
  closeModal() {
    const modal = document.getElementById('contact-modal')
    modal.style.display = 'none'
    this.$insertDom.setAttribute('aria-hidden', 'false')
    const $modalDom = document.querySelector('.contact-modal')
    $modalDom.setAttribute('aria-hidden', 'true')
    const openBtn = document.querySelector('.contact-button')
    openBtn.focus()
  }

  /**
   * Récupère les valeurs saisies dans le formulaire de contact.
   * @returns {{getPrenom: string, getNom: string, getEmail: string, getMessage: string}} Les données du formulaire.
   */
  getDataInput() {
    const getPrenom = document.querySelector('#prenom').value
    const getNom = document.querySelector('#nom').value
    const getEmail = document.querySelector('#email').value
    const getMessage = document.querySelector('#message').value
    return { getPrenom, getNom, getEmail, getMessage }
  }

  /**
   * Réinitialise les champs du formulaire de contact.
   */
  deleteDataInput() {
    document.querySelectorAll('.modal-input').forEach((e) => {
      e.value = ''
    })
    const textareaValue = document.querySelector('.modal-textarea')
    textareaValue.value = ''
  }

  /**
   * Valide le formulaire, affiche les données dans la console et réinitialise le formulaire.
   * @param {Event} event - L'événement de soumission du formulaire.
   */
  validate(event) {
    event.preventDefault()
    this.closeModal()
    const data = this.getDataInput()
    console.log(`Prénom: ${data.getPrenom}`)
    console.log(`Nom: ${data.getNom}`)
    console.log(`Email: ${data.getEmail}`)
    console.log(`Message: ${data.getMessage}`)
    console.log('Envoyé')
    this.deleteDataInput()
  }
}
