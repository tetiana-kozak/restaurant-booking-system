import SharedBlockRegisteredUser from 'pages/UserReservationTablePage/SharedBlockRegisteredUser/SharedBlockRegisteredUser';
import SharedBlockUnregisteredUser from 'pages/UserReservationTablePage/SharedBlockUnregisteredUser/SharedBlockUnregisteredUser';
import { useState } from 'react';

type Props = {};

const SharedBlockReservations = (props: Props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  return (
    <div className="w-1392 mx-auto pt-60 pb-70 px-50 bg-iframe_bg_color rounded-md flex gap-52">
      {isUserLoggedIn ? (
        <SharedBlockRegisteredUser />
      ) : (
        <SharedBlockUnregisteredUser />
      )}
    </div>
  )
}

export default SharedBlockReservations