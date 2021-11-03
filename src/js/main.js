import getSearchLocation from './utils/getSearchLocation.js'
import getRealEstateList from './utils/getRealEstateList.js'
import {
  realEstateDisplayHandler,
  searchDisplayHandler,
} from './utils/displayHandler.js'

const searchInput = document.querySelector('#text__location')
searchInput.addEventListener('keyup', (e) => {
  const userInput = e.target.value
  const searchedTerm = getSearchLocation(userInput)
  if (searchedTerm) {
    doSearch(searchedTerm)
  }
})

async function doSearch(searchedTerm) {
  const searchKeyword = searchedTerm

  const realEstateList = await getRealEstateList(searchKeyword)

  realEstateDisplayHandler(realEstateList)
  searchDisplayHandler(realEstateList, searchKeyword)
}
