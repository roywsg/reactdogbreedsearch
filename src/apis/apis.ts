const headers = {
  'x-api-key': import.meta.env.VITE_APIKEY,
  'Content-Type': 'application/json'
}

export async function searchBreeds(searchTerm: string) {
  return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}&limit=10&page=0`, {headers}).then(rs => rs.json())
}

export async function getBreeds(limit: number, page: number) {
  return fetch(`https://api.thedogapi.com/v1/breeds/?limit=${limit}&page=${page}`, {headers}).then(rs => rs.json())
}

export async function getImage(imageId: string) {
  return fetch(`https://api.thedogapi.com/v1/images/${imageId}`, {headers}).then(rs => rs.json())
}