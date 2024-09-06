import axios from 'axios'
import { Owner } from '../types/types'

const apiUrl = process.env.REACT_APP_API_URL

export const fetchCats = async (): Promise<{ [key: string]: string[] }> => {
  try {
    if (!apiUrl) {
      throw new Error('API URL is not defined in environment variables')
    }
    const response = await axios.get(apiUrl)
    const data: Owner[] = response.data

    const catsByGender: { [key: string]: string[] } = {}
    data.forEach((owner) => {
      if (owner.pets) {
        owner.pets.forEach((pet) => {
          if (pet.type.toLowerCase() === 'cat') {
            if (!catsByGender[owner.gender]) {
              catsByGender[owner.gender] = []
            }
            catsByGender[owner.gender].push(pet.name)
          }
        })
      }
    })

    for (const gender in catsByGender) {
      catsByGender[gender].sort()
    }

    return catsByGender
  } catch (error) {
    throw new Error('Failed to load data')
  }
}
