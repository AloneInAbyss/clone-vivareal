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
  if (searchedTerm) doSearch(searchedTerm)
  else disableResults()
})

const fail = document.querySelector('#search-failed')
const success = document.querySelector('#search-successful')

async function doSearch(searchedTerm) {
  const searchKeyword = searchedTerm

  const realEstateList = await getRealEstateList(searchKeyword)

  realEstateDisplayHandler(realEstateList)
  searchDisplayHandler(realEstateList, searchKeyword)

  enableResults()
}

function disableResults() {
  fail.style.display = 'block'
  success.style.display = 'none'
}

function enableResults() {
  fail.style.display = 'none'
  success.style.display = 'block'
  success.style.visibility = 'visible'
}
