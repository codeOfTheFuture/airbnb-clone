import TripCard from "./TripCard";

const TripInspiration: React.FC = () => {
  return (
    <div className="flex gap-2 md:gap-5 w-full sm:w-[5000px]">
      <TripCard img="/images/trip01.webp" location="Montauk" distance="112" bgColor='bg-fuchsia-600' />
      <TripCard img="/images/trip02.webp" location='Kingston' distance="79" bgColor="bg-red-500" />
      <TripCard img="/images/trip03.webp" location='Scranton' distance="94" bgColor="bg-orange-600" />
      <TripCard img="/images/trip04.webp" location='Hudson' distance="103" bgColor="bg-rose-500" />
    </div>
  )
}

export default TripInspiration;