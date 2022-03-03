import { useState } from "react";
import DatePicker from "./DatePicker";

const CalendarDropdown: React.FC = () => {
  const [dateHover, setDateHover] = useState<Date | null>(null);


  const currMonth = new Date().getMonth(),
    currYear = new Date().getFullYear();

  const handleDateHover = (date: Date | null): void => {
    setDateHover(date);
  };

  return (
    <div className='w-[800px] h-[500px] bg-white rounded-full flex flex-col items-center '>
      <div className='flex items-center justify-around bg-gray-200 rounded-full w-auto p-1 mt-6'>
        <button className='w-24 h-8 p-1 rounded-full text-sm font-semibold bg-white'>
          Calendar
        </button>
        <button className='w-24 h-8 p-1 rounded-full text-sm font-semibold ml-2 hover:bg-gray-50'>
          I&apos;m flexible
        </button>
      </div>

      <div className='flex mt-8 justify-evenly w-full'>
        <DatePicker
          month={currMonth}
          year={currYear}
          dateHover={dateHover}
          handleDateHover={handleDateHover}
        />
        <DatePicker
          month={currMonth + 1}
          year={currYear}
          dateHover={dateHover}
          handleDateHover={handleDateHover}
        />
      </div>
    </div>
  );
};

export default CalendarDropdown;
