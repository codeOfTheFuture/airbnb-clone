import Image from "next/image";

interface ExperiencesProps {
  img: string;
  heading: string;
  btnText: string;
}

const Experiences: React.FC<ExperiencesProps> = (props) => {
  const { img, heading, btnText } = props;

  return (
    <div className="relative w-full sm:w-1/2 h-[500px] sm:h-[800px]">
      <Image src={img} layout="fill" alt="" className="rounded-2xl" />
      <div className="text-white absolute top-0 left-0 p-12 w-full sm:w-1/2">
        <h3 className="text-3xl sm:text-5xl font-semibold mb-8">{heading}</h3>
        <button className="px-5 py-3 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100">{btnText}</button>
      </div>
    </div>
  )
}

export default Experiences;