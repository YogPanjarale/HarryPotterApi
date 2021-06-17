export interface Character {
    id:string
    name: string
    species: string
    gender: string
    house: string
    dateOfBirth: string
    yearOfBirth: number
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: Wand
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alive: boolean
    image: string
  }
  
  export interface Wand {
    wood: string
    core: string
    length: number
  }
  