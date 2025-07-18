class MediaFactory {
  /**
   * @param {Object} data - Les données du média.
   * @param {string} type - Le type de média ('image' ou 'video').
   * @param {number} likeId - L'identifiant du like.
   * @throws {string} Si le type est inconnu.
   */
  constructor(data, type, likeId) {
    if (type === 'image') {
      new CreateImageCard(likeId).createMedia(data)
    } else if (type === 'video') {
      new CreateVideoCard(likeId).createMedia(data)
    } else {
      throw 'Unknown type format'
    }
  }
}
