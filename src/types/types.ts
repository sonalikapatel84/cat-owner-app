export interface Owner {
  name: string
  gender: string
  age: number
  pets: Pet[] | null
}

export interface Pet {
  name: string
  type: string
}
