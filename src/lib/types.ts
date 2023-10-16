export type Dog = {
  weight: Weight
  height: Height
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  origin: string
  reference_image_id: string
}
type Weight = {
  imperial: string
  metric: string
}

type Height = {
  imperial: string
  metric: string
}

export type Dogs = {
  dogs: Dog[]
}