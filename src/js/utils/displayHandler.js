import ListingHTMLFactory from '../classes/ListingHTMLFactory.js'

export function realEstateDisplayHandler(realEstateList) {
  const cardGroup = document.querySelector('.card-group')
  while (cardGroup.firstChild) {
    cardGroup.removeChild(cardGroup.firstChild)
  }

  realEstateList.listings.forEach((listing) => {
    new ListingHTMLFactory(listing)
  })
}

export function searchDisplayHandler(realEstateList) {
  const totalCount = realEstateList.totalCount
  const city = 'são paulo'
  const state = 'sp'.toUpperCase()

  const searchResult = document.querySelector('#searchCount')
  searchResult.innerText = totalCount

  const searchLocation = document.querySelector('.properties-location')
  while (searchLocation.firstChild) {
    searchLocation.removeChild(searchLocation.firstChild)
  }

  const location = document.createElement('p')
  const span = document.createElement('span')
  span.append('x')
  location.append(city + ' - ' + state)
  location.appendChild(span)
  searchLocation.appendChild(location)
}
