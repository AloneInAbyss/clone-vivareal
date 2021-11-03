// CRIA OS COMPONENTES HTML PARA CADA IMÓVEL
export default class ListingHTMLFactory {
  constructor({
    address,
    amenities,
    bathrooms,
    bedrooms,
    condominiumFee,
    media,
    price,
    suites,
    totalArea,
    title,
  }) {
    this.photo = media
    this.address = address.street
    this.number = address.streetNumber
    this.neighborhood = address.neighborhood
    this.city = address.city
    this.stateAcronym = address.state
    this.totalArea = totalArea
    this.title = title
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.slots = suites
    this.amenities = amenities
    this.price = price
    this.condominiumFee = condominiumFee
    this.logo =
      'https://cdn1.vivareal.com/p/1-ba36604/v/static/app/img/publisher-undefined.png'

    const cardGroup = document.querySelector('.card-group')

    this.createNode.bind(this)
    this.listingHTML = this.createNode()

    cardGroup.appendChild(this.listingHTML)
  }

  createNode() {
    const photo = this.photo
    const address = this.address
    const number = this.number
    const neighborhood = this.neighborhood
    const city = this.city
    const stateAcronym = this.stateAcronym
    const totalArea = this.totalArea
    const title = this.title
    const bedrooms = this.bedrooms
    const bathrooms = this.bathrooms
    const slots = this.slots
    const amenities = this.amenities
    const price = this.price
    const condominiumFee = this.condominiumFee
    const logo = this.logo

    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')

    const imgPhoto = document.createElement('img')
    imgPhoto.setAttribute('class', 'photo')
    imgPhoto.setAttribute('src', photo)
    imgPhoto.setAttribute('alt', 'Imagem do imóvel')
    divCard.appendChild(imgPhoto)

    const divCardText = document.createElement('div')
    divCardText.setAttribute('class', 'card-text')

    const divCardBody = document.createElement('div')
    divCardBody.setAttribute('class', 'card-body')

    const pSubtitle = document.createElement('p')
    pSubtitle.setAttribute('class', 'subtitle')
    pSubtitle.appendChild(
      document.createTextNode(
        `${address}, ${number} - ${neighborhood}, ${city} - ${stateAcronym}`
      )
    )
    divCardBody.appendChild(pSubtitle)

    const pTitle = document.createElement('p')
    pTitle.setAttribute('class', 'title')
    pTitle.appendChild(document.createTextNode(title))
    divCardBody.appendChild(pTitle)

    const divInfo = document.createElement('div')
    divInfo.setAttribute('class', 'info')

    const pSize = document.createElement('p')
    pSize.setAttribute('class', 'size')

    const spanPSize = document.createElement('span')
    spanPSize.appendChild(document.createTextNode(totalArea))
    pSize.appendChild(spanPSize)
    pSize.appendChild(document.createTextNode(' m²'))
    divInfo.appendChild(pSize)

    const pBedrooms = document.createElement('p')
    pBedrooms.setAttribute('class', 'bedrooms')

    const spanPBedrooms = document.createElement('span')
    spanPBedrooms.appendChild(document.createTextNode(bedrooms))
    pBedrooms.appendChild(spanPBedrooms)
    pBedrooms.appendChild(document.createTextNode(' Quartos'))
    divInfo.appendChild(pBedrooms)

    const pBathrooms = document.createElement('p')
    pBathrooms.setAttribute('class', 'bathrooms')

    const spanPBathrooms = document.createElement('span')
    spanPBathrooms.appendChild(document.createTextNode(bathrooms))
    pBathrooms.appendChild(spanPBathrooms)
    pBathrooms.appendChild(document.createTextNode(' Banheiros'))
    divInfo.appendChild(pBathrooms)

    const pSlots = document.createElement('p')
    pSlots.setAttribute('class', 'slots')

    const spanPSlots = document.createElement('span')
    spanPSlots.appendChild(document.createTextNode(slots))
    pSlots.appendChild(spanPSlots)
    pSlots.appendChild(document.createTextNode(' Vagas'))
    divInfo.appendChild(pSlots)
    divCardBody.appendChild(divInfo)

    const divAmetinies = document.createElement('div')
    divAmetinies.setAttribute('class', 'amenities')

    amenities.forEach((amenity) => {
      const pAmenity = document.createElement('p')
      pAmenity.appendChild(document.createTextNode(amenity))
      divAmetinies.appendChild(pAmenity)
    })

    divCardBody.appendChild(divAmetinies)

    divCardText.appendChild(divCardBody)

    const footerCardFooter = document.createElement('footer')
    footerCardFooter.setAttribute('class', 'card-footer')

    const div = document.createElement('div')

    const pPrice = document.createElement('p')
    pPrice.setAttribute('class', 'price')
    pPrice.appendChild(
      document.createTextNode(`R$ ${parseInt(price).toLocaleString('pt-BR')}`)
    )

    div.appendChild(pPrice)

    if (condominiumFee) {
      const pCondominiumFee = document.createElement('p')
      pCondominiumFee.setAttribute('class', 'condominium-fee')
      pCondominiumFee.appendChild(document.createTextNode('Condomínio: '))

      const span = document.createElement('span')
      span.appendChild(
        document.createTextNode(
          `R$ ${parseInt(condominiumFee).toLocaleString('pt-BR')}`
        )
      )
      pCondominiumFee.appendChild(span)

      div.appendChild(pCondominiumFee)
    }

    footerCardFooter.appendChild(div)

    const div2 = document.createElement('div')

    const imgLogo = document.createElement('img')
    imgLogo.setAttribute('class', 'logo')
    imgLogo.setAttribute('src', logo)
    imgLogo.setAttribute('alt', 'Logo do condomínio')
    div2.appendChild(imgLogo)

    footerCardFooter.appendChild(div2)

    divCardText.appendChild(footerCardFooter)

    divCard.appendChild(divCardText)

    return divCard
  }
}
