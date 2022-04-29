const localizationService = {
  getAllStatesOrderByName: async (axios) => {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
    )
    return response.data
  }
}

export default localizationService
