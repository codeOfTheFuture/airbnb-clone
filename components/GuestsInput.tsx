import { useState } from "react";
import GuestsCounter from "./GuestsCounter";

interface GuestsInputProps {
  id: number;
  label: string;
  description: string;
}

enum GuestsInputs {
  Adults,
  Children,
  Infants,
  Pets,
}

const GuestsInput: React.FC<GuestsInputProps> = ({
  id,
  label,
  description,
}) => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    setCount((prevState) => (prevState === 0 ? 0 : prevState - 1));
  };

  return (
    <div
      className={`flex justify-between items-center p-2 border-b ${id === GuestsInputs.Pets && "border-b-0"
        }`}
    >
      <div className='flex flex-col'>
        <label className='font-bold'>{label}</label>
        {id === GuestsInputs.Pets ? (
          <a className='underline' href='#'>
            {description}
          </a>
        ) : (
          <p className='text-gray-500'>{description}</p>
        )}
      </div>
      <GuestsCounter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </div>
  );
};

export default GuestsInput;
