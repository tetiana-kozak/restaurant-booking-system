import SharedBlockReservations from "components/SharedBlockReservations/SharedBlockReservations";

type Props = {}
const RestaurantBookingPage = (props: Props) => {
  return (
    <div className="max-width: 1440px mx-auto py-12 px-6">
      <SharedBlockReservations />
    </div>
  )
};

export default RestaurantBookingPage;