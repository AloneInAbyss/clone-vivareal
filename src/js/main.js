import getSearchLocation from './utils/getSearchLocation.js'
import getRealEstateList from './utils/getRealEstateList.js'
import {
  realEstateDisplayHandler,
  searchDisplayHandler,
} from './utils/displayHandler.js'

async function doSearch() {
  const searchInput = document.querySelector('#text__location')

  const searchKeyword = getSearchLocation(searchInput)

  const realEstateList = await getRealEstateList(searchKeyword)

  realEstateDisplayHandler(realEstateList)
  searchDisplayHandler(realEstateList)

  console.log(realEstateList)
}

doSearch()
