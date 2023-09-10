export type initialStateRestaurantsListType = {
  userRestaurantsList: restaurantType[]
}

export type restaurantsType = {
  restaurants: restaurantType[]
  restaurantsCount: number
}

export type restaurantType = {
  id: number
  title: string
  description: string
  location: string
  user: {
    id: number
    email: string
    bio: string
    image: string
  }
}

export type createRestaurantType = {
  restaurant: createRestaurantValuesType
}

export type createRestaurantValuesType = {
  title: string
  description: string
  location: string
}