/**
 * Classe utilitaire pour stocker et mettre à jour les médias filtrés.
 */
class InitData {
  static data = []
  static getData() {
    return this.data
  }
  static update = {}
  static getUpdate() {
    return this.update
  }
}

/**
 * Classe pour trier les médias selon le filtre choisi.
 */
class SortFilters {
  constructor(typeFilter) {
    this._typeFilter = typeFilter
    this._filteredMedia = []
    this.sortData()
  }

  /**
   * Trie les médias selon le filtre choisi et met à jour l'affichage.
   */
  sortData() {
    if (this._typeFilter === 'Popularité') {
      this._filteredMedia = InitData.data.sort((a, b) => b._likes - a._likes)
    } else if (this._typeFilter === 'Titre') {
      this._filteredMedia = InitData.data.sort((a, b) =>
        a.title.localeCompare(b._title)
      )
    } else if (this._typeFilter === 'Date') {
      this._filteredMedia = InitData.data.sort((a, b) => {
        const dateA = new Date(a._date)
        const dateB = new Date(b._date)
        return dateB - dateA
      })
    }
    InitData.update.updateMedia(this._filteredMedia)
  }
}
