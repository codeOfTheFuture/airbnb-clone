import { useSearchContext } from "../Context/SearchContext";

interface GuestsCounterProps {
  id: number;
  count: number;
}

enum GuestsInputs {
  Adults,
  Children,
  Infants,
  Pets,
}

const GuestsCounter: React.FC<GuestsCounterProps> = ({ id, count }) => {
  const {
    guestsCount,
    adultsCount,
    childrenCount,
    infantsCount,
    petsCount,
    setGuestsCount,
    setAdultsCount,
    setChildrenCount,
    setInfantsCount,
    setPetsCount,
  } = useSearchContext();

  const incrementCount = () => {
    if (id === GuestsInputs.Adults) {
      setGuestsCount(guestsCount + 1);
      setAdultsCount(adultsCount + 1);
    }
    if (id === GuestsInputs.Children) {
      if ((adultsCount === 0 && guestsCount === 0)) {
        setGuestsCount(guestsCount + 2);
        setAdultsCount(guestsCount + 1);
        setChildrenCount(childrenCount + 1);
      } else {
        setGuestsCount(guestsCount + 1);
        setChildrenCount(childrenCount + 1);
      }
    }
    if (id === GuestsInputs.Infants) {
      if ((adultsCount === 0 && guestsCount === 0)) {
        setGuestsCount(guestsCount + 2);
        setAdultsCount(guestsCount + 1);
        setInfantsCount(infantsCount + 1);
      } else {
        setGuestsCount(guestsCount + 1);
        setInfantsCount(infantsCount + 1);
      }
    }
    if (id === GuestsInputs.Pets) {
      if ((adultsCount === 0 && guestsCount === 0)) {
        setGuestsCount(guestsCount + 2);
        setAdultsCount(guestsCount + 1);
        setPetsCount(petsCount + 1);
      } else {
        setGuestsCount(guestsCount + 1);
        setPetsCount(petsCount + 1);
      }
    }
  }

  const decrementCount = () => {
    if (id === GuestsInputs.Adults) {
      if (adultsCount > 0) {
        if (adultsCount === 1) {
          setGuestsCount(0);
          setAdultsCount(0);
          setChildrenCount(0);
          setInfantsCount(0);
          setPetsCount(0);
        }
        setGuestsCount(guestsCount - 1);
        setAdultsCount(adultsCount - 1);
      }
    }
    if (id === GuestsInputs.Children) {
      if (childrenCount > 0) {
        if ((adultsCount === 1 && guestsCount === 2)) {
          setGuestsCount(guestsCount - 2);
          setAdultsCount(guestsCount - 1);
          setChildrenCount(childrenCount - 1);
        } else {
          setGuestsCount(guestsCount - 1);
          setChildrenCount(childrenCount - 1);
        }
      }
    }
    if (id === GuestsInputs.Infants) {
      if (infantsCount > 0) {
        if ((adultsCount === 1 && guestsCount === 2)) {
          setGuestsCount(guestsCount - 2);
          setAdultsCount(guestsCount - 1);
          setInfantsCount(infantsCount - 1);
        } else {
          setGuestsCount(guestsCount - 1);
          setInfantsCount(infantsCount - 1);
        }
      }
    }
    if (id === GuestsInputs.Pets) {
      if (petsCount > 0) {
        if ((adultsCount === 1 && guestsCount === 2)) {
          setGuestsCount(guestsCount - 2);
          setAdultsCount(guestsCount - 1);
          setPetsCount(petsCount - 1);
        } else {
          setGuestsCount(guestsCount - 1);
          setPetsCount(petsCount - 1);
        }
      }
    }
  }

  return (
    <div className='flex items-center justify-between w-28 '>
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full p-2 select-none ${count === 0
          ? "cursor-not-allowed text-gray-200 border"
          : "cursor-pointer border border-gray-400 hover:border-gray-800"
          }`}
        onClick={() => decrementCount()}
      >
        -
      </div>
      <div className='text-gray-500'>{count}</div>
      <div
        className='flex items-center justify-center w-8 h-8 rounded-full p-2 border border-gray-400 hover:border-gray-800 cursor-pointer select-none'
        onClick={() => incrementCount()}
      >
        +
      </div>
    </div>
  );
};

export default GuestsCounter;
