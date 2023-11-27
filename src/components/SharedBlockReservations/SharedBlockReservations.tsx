import SharedBlockRegisteredUser from "components/SharedBlockRegisteredUser/SharedBlockRegisteredUser";
import SharedBlockUnregisteredUser from "components/SharedBlockUnregisteredUser/SharedBlockUnregisteredUser";
import SteppeReservation from "components/SteppeReservation/SteppeReservation";
import { useState } from "react";

type Props = {};

const SharedBlockReservations = (props: Props) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    
    return (
        <div className="w-1392 mx-auto pt-60 pb-70 px-50 bg-iframe_bg_color rounded-md flex gap-52">
        {isUserLoggedIn ? (
            <SharedBlockRegisteredUser />
        ) : (
            <SharedBlockUnregisteredUser />
        )}
            <SteppeReservation />
        </div>
    )
};

export default SharedBlockReservations;