import { useState } from "react";
import DatePicker from "./DatePicker";

const CalendarDropdown: React.FC = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [dateHover, setDateHover] = useState<Date | null>(null);


  console.log("check in: ", checkIn, 'check out: ', checkOut);

  const handleDateSelect = (date: Date): void => {
    if (checkIn === null) {
      return setCheckIn(date);
    }
    setCheckOut(date);
  }

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
        <DatePicker checkIn={checkIn} checkOut={checkOut} month={month} year={year} dateHover={dateHover} handleDateSelect={handleDateSelect} handleDateHover={handleDateHover} />
        <DatePicker checkIn={checkIn} checkOut={checkOut} month={month + 1} year={year} dateHover={dateHover} handleDateSelect={handleDateSelect} handleDateHover={handleDateHover} />
      </div>
    </div>
  );
};

export default CalendarDropdown;
