import fetch from 'node-fetch'
import fs from 'fs'

/** 
Realiza busca na api do IBGE:
https://servicodados.ibge.gov.br/api/docs/localidades#api-Municipios-municipiosGet:~:text=%5D-,Munic%C3%ADpios,-Obt%C3%A9m%20o%20conjunto
**/

async function getCitiesFromIBGE() {
    try {
        const apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome'
        const response = await fetch(apiUrl)
        return await response.json()
    } catch (error) {
        console.error(`Failed to get cities from IBGE API. Error: ${error}`)
    }
}

async function exportCitiesJSON() {
    const cities = await getCitiesFromIBGE()
    const mappedcities = cities.map(city => ({
        city: city.nome,
        state: city.microrregiao.mesorregiao.UF.sigla
    }))
    fs.writeFileSync('./enums/Cities.json', JSON.stringify(mappedcities, null, 2))
}

exportCitiesJSON()
