class App {
  /**
   * Initialise l'API et le conteneur DOM pour les photographes.
   */
  constructor() {
    this.photographersApi = new PhotographerApi('./data/photographers.json')
    this.$addDom = document.querySelector('.photographer_section')
  }

  /**
   * Méthode principale asynchrone pour charger et afficher les photographes.
   * @async
   * @returns {Promise<void>}
   */
  async main() {
    const photographersData = await this.photographersApi.get()
    const Photographers = new PhotographersFactory(
      photographersData,
      'photographers'
    )
    Photographers.forEach((photographer) => {
      const TemplateCard = new PhotographerCard(photographer)
      this.$addDom.appendChild(TemplateCard.createPhotographerCard())
    })
  }
}

const app = new App()
app.main()
