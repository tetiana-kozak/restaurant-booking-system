export type UserSignInData = {
  email: string
  password: string
}

export type UserSignUpData = {
  email: string
  password: string
  confirmedPassword: string
}

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
