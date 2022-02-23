import DatePickerDay from "./DatePickerDay";
import DatePickerMonthYear from "./DatePickerMonthYear";
import DatePickerWeek from "./DatePickerWeek";
import { Calendar } from "calendar";
import { useEffect, useState } from "react";

interface DatePickerProps {
  checkIn: Date | null;
  checkOut: Date | null;
  month: number;
  year: number;
  dateHover: Date | null;
  handleDateSelect: (date: Date) => void;
  handleDateHover: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { checkIn, checkOut, month, year, dateHover, handleDateSelect, handleDateHover } = props;
  const [dates, setDates] = useState<number[]>([]);

  useEffect(() => {
    const cal = new Calendar();
    const m = cal
      .monthDays(year, month)
      .reduce((month, week) => month.concat(week), []);
    setDates(m);
  }, [month, year]);

  return (
    <div className='flex flex-col w-[325px] h-[325px]'>
      <DatePickerMonthYear month={month} year={year} />
      <DatePickerWeek />
      <div className='grid grid-cols-7 p-2 w-full'>
        {dates.map((date, i) => (
          <DatePickerDay
            key={i}
            checkIn={checkIn}
            checkOut={checkOut}
            date={date}
            month={month}
            year={year}
            dateHover={dateHover}
            handleDateSelect={handleDateSelect}
            handleDateHover={handleDateHover}
          />
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
