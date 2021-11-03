// IDENTIFICA A LOCALIZAÇÃO QUE ESTÁ
// SENDO PESQUISADA
// RETORNA O NOME DA LOCALIZAÇÃO
export default function getSearchLocation(userInput = '') {
  const searchedTerm = userInput

  switch (searchedTerm.trim().toLowerCase()) {
    case 'sp':
    case 'sao p':
    case 'sao-p':
    case 'sao_p':
    case 'sao paulo':
    case 'são p':
    case 'são-p':
    case 'são_p':
    case 'são paulo':
      return {
        displayString: 'São Paulo - SP',
        state: 'sp',
        city: 'sao-paulo',
      }

    case 'rj':
    case 'rio':
      return {
        displayString: 'Rio de Janeiro - RJ',
        state: 'rj',
        city: 'rio-de-janeiro',
      }

    default:
      return
  }
}
