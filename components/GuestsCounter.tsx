interface GuestsCounterProps {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

const GuestsCounter: React.FC<GuestsCounterProps> = (props) => {
  const { count, incrementCount, decrementCount } = props;

  return (
    <div className='flex items-center justify-between w-28 '>
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full p-2  ${count === 0
            ? "cursor-not-allowed text-gray-200 border"
            : "cursor-pointer border border-gray-400 hover:border-gray-800"
          }`}
        onClick={() => decrementCount()}
      >
        -
      </div>
      <div className='text-gray-500'>{count}</div>
      <div
        className='flex items-center justify-center w-8 h-8 rounded-full p-2 border border-gray-400 hover:border-gray-800 cursor-pointer'
        onClick={() => incrementCount()}
      >
        +
      </div>
    </div>
  );
};

export default GuestsCounter;
