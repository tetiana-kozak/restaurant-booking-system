import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { getUserRestaurantsList } from './userRestaurantsReduser'
import { useEffect } from 'react'

type Props = {}
const RestaurantListPage = (props: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserRestaurantsList())
  }, [dispatch])

  const userRestaurantsList = useAppSelector(
    (state) => state.userRestaurants.userRestaurantsList
  )

  return (
    <>
      <div className="user-restaurants-list">
        <h1>User restaurants list</h1>
        <ul>
          {userRestaurantsList.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default RestaurantListPage
