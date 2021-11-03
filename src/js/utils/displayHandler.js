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

export function searchDisplayHandler(realEstateList, searchKeyword) {
  const totalCount = realEstateList.totalCount
  const displayString = searchKeyword.displayString

  const searchResult = document.querySelector('#searchCount')
  searchResult.innerText = totalCount

  const locationCityAndState = document.querySelector('#locationCityAndState')
  locationCityAndState.innerText = displayString

  const searchLocation = document.querySelector('.properties-location')
  while (searchLocation.firstChild) {
    searchLocation.removeChild(searchLocation.firstChild)
  }

  const location = document.createElement('p')
  const span = document.createElement('span')
  span.append('x')
  location.append(displayString)
  location.appendChild(span)
  searchLocation.appendChild(location)

  const searchTerms = document.querySelector('.search-terms')
  searchTerms.innerText = displayString
  searchTerms.append(span)
}
