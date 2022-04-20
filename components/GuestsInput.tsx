import GuestsCounter from "./GuestsCounter";

interface GuestsInputProps {
  id: number;
  label: string;
  description: string;
  count: number;
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
  count
}) => {

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
      <GuestsCounter id={id} count={count} />
    </div>
  );
};

export default GuestsInput;
