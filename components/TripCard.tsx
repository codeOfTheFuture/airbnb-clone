import Image from "next/image";

interface TripCardProps {
  img: string;
  location: string;
  distance: string;
  bgColor: string;
}

const TripCard: React.FC<TripCardProps> = (props) => {
  const { img, location, distance, bgColor } = props;
  return (
    <div className={`w-[200px] h-[300px] md:w-[382px] md:h-[500px] rounded-2xl ${bgColor}`} >
      <div className="w-full h-1/2 relative">
        <Image src={img} alt='' layout="fill" className="rounded-t-2xl" />
      </div>
      <div className="p-4 text-white">
        <h3 className="text-2xl md:text-4xl font-medium mb-2">{location}</h3>
        <p className="text-base text-xl">{distance} miles away</p>
      </div>
    </div>
  )
}

export default TripCard;