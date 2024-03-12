export type initialStateRestaurantsListType = {
  userRestaurantsList: restaurantType[],
  userRestaurantsCurrent: restaurantType[],
  userRestaurantsTable: userRestaurantsTableType,
}

//Restaurant
export type restaurantsType = {
  restaurants: restaurantType[]
  restaurantsCount: number
}

export type restaurantType = {
  id: number
  title: string
  description: string
  location: string
  city: string
  type: string
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

export type editRestaurantType = {
  restaurant: editRestaurantValuesType
}

export type editRestaurantValuesType = {
  title: string
  description: string
  location: string
  id: number
}
//Table
export type getTableType = {
  id: number;
  title: string;
  x: number;
  y: number;
  isPlaced: boolean; 
  seatsCount: number;
  restaurantId: number;
  floorId: number;
};

export type tableType = {
  id?: number; 
  restaurantId?: number;
  floorId: number;
  title: string;
  seatsCount: number;
  x?: number;
  y?: number;
  isPlaced?: boolean;
};

export type restaurantTableType = {
  tables: getTableType[],
  tablesCount: number
}

export type userRestaurantsTableType = {
  tables: tableType[]; 
  tablesCount: number;
};
