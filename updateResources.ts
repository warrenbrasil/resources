import fetch from 'node-fetch'
import fs from 'fs'

/** 
Realiza busca na api do IBGE:
https://servicodados.ibge.gov.br/api/docs/localidades#api-Municipios-municipiosGet:~:text=%5D-,Munic%C3%ADpios,-Obt%C3%A9m%20o%20conjunto
**/

interface CitiesResponseFromIBGE {
id: number
nome: string
microrregiao: {
    id: number
    nome: string
    mesorregiao: {
    id: number
    nome: string
    UF: {
        id: number
        sigla: string
        nome: string
        regiao: { 
        id: number
        sigla: string
        nome: string
        },
    },
    },
},
'regiao-imediata': {
    id: number
    nome: string
    'regiao-intermediaria': {
    id: number
    nome: string
    UF: {
        id: number
        sigla: string
        nome: string
        regiao: {
        id: number
        sigla: string
        nome: string
        },
    },
    },
},
}

async function getCitiesFromIBGE(): Promise<CitiesResponseFromIBGE[]> {
    try {
        const apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome'
        const response = await fetch(apiUrl)
        return await response.json() as CitiesResponseFromIBGE[]
    } catch (error) {
        console.error(`Failed to get cities from IBGE API. Error: ${error}`)
    }
}

async function exportCitiesJSON() {
    const cities: CitiesResponseFromIBGE[] = await getCitiesFromIBGE()
    const mappedcities = cities.map(city => ({
        city: city.nome,
        state: city.microrregiao.mesorregiao.UF.sigla
    }))
    fs.writeFileSync('./enums/Citieqs.json', JSON.stringify(mappedcities, null, 2))
}

exportCitiesJSON()
