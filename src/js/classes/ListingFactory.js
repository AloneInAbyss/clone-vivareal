// CRIA UMA CLASSE PARA CADA IMÓVEL
// A PARTIR DOS DADOS CRUS DA API
export default class ListingFactory {
  constructor(listing) {
    const address = {
      street: listing.link.data.street,
      streetNumber: listing.link.data.streetNumber,
      neighborhood: listing.link.data.neighborhood,
      city: listing.link.data.city,
      state: listing.listing.address.stateAcronym,
    }

    const amenities = listing.listing.amenities.map((amenity) => {
      switch (amenity) {
        case 'PARTY_HALL':
          return 'SALÃO DE FESTAS'
        case 'FURNISHED':
          return 'MOBILIADA'
        case 'FIREPLACE':
          return 'LAREIRA'
        case 'POOL':
          return 'PISCINA'
        case 'BARBECUE_GRILL':
          return 'CHURRAQUEIRA'
        case 'AIR_CONDITIONING':
          return 'AR CONDICIONADO'
        case 'BICYCLES_PLACE':
          return 'BICICLETÁRIO'
        case 'GATED_COMMUNITY':
          return 'CONDOMÍNIO FECHADO'
        case 'PLAYGROUND':
          return 'PLAYGROUND'
        case 'SPORTS_COURT':
          return 'QUADRA DE ESPORTES'
        case 'PETS_ALLOWED':
          return 'PERMITIDO ANIMAIS'
        case 'AMERICAN_KITCHEN':
          return 'COZINHA AMERICANA'
        case 'TENNIS_COURT':
          return 'QUADRA DE TÊNIS'
        case 'LAUNDRY':
          return 'LAVANDERIA'
        case 'GYM':
          return 'ACADEMIA'
        case 'ELECTRONIC_GATE':
          return 'PORTÃO ELETRÔNICO'
        case 'GARDEN':
          return 'JARDIM'

        default:
          return amenity
      }
    })

    const title = listing.link.name
    const totalArea = listing.listing.usableAreas.reduce((acc, cur) => cur, '0')
    const suites = listing.listing.suites.reduce((acc, cur) => cur, 0)
    const bathrooms = listing.listing.bathrooms.reduce((acc, cur) => cur, 0)
    const bedrooms = listing.listing.bedrooms.reduce((acc, cur) => cur, 0)
    const price = listing.listing.pricingInfos.reduce((acc, cur) => cur.price, '0') // prettier-ignore
    const condominiumFee = listing.listing.pricingInfos.reduce((acc, cur) => cur.monthlyCondoFee, '0') // prettier-ignore
    const media = listing.medias.reduce((acc, cur) => cur.url, '')

    this.address = address
    this.amenities = amenities
    this.title = title
    this.totalArea = totalArea
    this.suites = suites
    this.bathrooms = bathrooms
    this.bedrooms = bedrooms
    this.price = price
    this.condominiumFee = condominiumFee
    this.media = media
  }
}
