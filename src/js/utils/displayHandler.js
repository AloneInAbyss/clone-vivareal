import ListingHTMLFactory from '../classes/ListingHTMLFactory.js'

export function realEstateDisplayHandler(realEstateList) {
  realEstateList.listings.forEach((listing) => {
    new ListingHTMLFactory(listing)
  })
}

export function searchDisplayHandler() {
  return
}
