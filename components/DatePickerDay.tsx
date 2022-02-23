import { useState } from "react";

interface DatePickerDayProps {
  checkIn: Date | null;
  checkOut: Date | null;
  date: number;
  year: number;
  month: number;
  dateHover: Date | null;
  handleDateSelect: (date: Date) => void;
  handleDateHover: (date: Date | null) => void;
}

const DatePickerDay: React.FC<DatePickerDayProps> = (props) => {
  const {
    checkIn,
    checkOut,
    date,
    month,
    year,
    dateHover,
    handleDateSelect,
    handleDateHover,
  } = props;
  const calenderDate = new Date(year, month, date);
  const todaysDate = new Date(Date.now()).getDate();
  const currMonth = new Date(Date.now()).getMonth();
  const validCalendarDate = (((date >= todaysDate) && (month === currMonth)) || (month > currMonth)) && date
  const dateBetweenCheckInAndDateHover = (checkIn && dateHover) && (calenderDate.getTime() > checkIn.getTime()) && (dateHover && (calenderDate.getTime() < dateHover.getTime()));
  const dateBetweenCheckInAndCheckOut = (checkIn && checkOut) && (calenderDate.getTime() > checkIn.getTime()) && (checkOut && (calenderDate.getTime() < checkOut.getTime()));

  return (
    <div
      className={`flex items-center justify-center w-full h-[45px]
      ${(validCalendarDate && (!checkOut && dateBetweenCheckInAndDateHover || dateBetweenCheckInAndCheckOut)) && 'bg-gray-100 border-y-2 border-white rounded-none'}
      ${(validCalendarDate &&
          (calenderDate.getTime() === checkIn?.getTime() ||
            calenderDate.getTime() === checkOut?.getTime())) &&
        "bg-black text-white rounded-full"
        }
      ${(validCalendarDate && checkIn && !checkOut && (calenderDate.getTime() === dateHover?.getTime()) && 'bg-black text-white rounded-full')}
      ${date < todaysDate &&
        month === currMonth &&
        "text-gray-200 hover:bg-white"
        }
      `}
      onClick={() => handleDateSelect(calenderDate)}
      onMouseEnter={() => handleDateHover(calenderDate)}
      onMouseLeave={() => handleDateHover(null)}
    >
      <div className={`flex justify-center items-center w-full h-full ${validCalendarDate && 'hover:border-2 border-black rounded-full cursor-pointer'}`}>
        {date !== 0 && String(date)}
      </div>
    </div>
  );
};

export default DatePickerDay;
