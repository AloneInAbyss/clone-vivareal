// BUSCA A LISTA DE IMÓVEIS DA API
// RETORNA A LISTA JÁ PARSEADA
import ListingFactory from '../classes/ListingFactory.js'

export default async function getRealEstateList(searchKeyword) {
  const fetchedData = await fetchData(searchKeyword)
  const parsedData = parseData(fetchedData)
  return parsedData
}

async function fetchData(searchKeyword) {
  const response = await fetch(
    `https://private-9e061d-piweb.apiary-mock.com/venda?state=${searchKeyword.state}&city=${searchKeyword.city}`
  )
  const data = await response.json()
  return data
}

function parseData(realEstateList) {
  const listingsArray = realEstateList.search.result.listings.map(
    (listing, index) => {
      const parsedListing = new ListingFactory(listing)
      return parsedListing
    }
  )

  const parsedData = {
    totalCount: realEstateList.search.totalCount,
    listings: listingsArray,
  }

  return parsedData
}
