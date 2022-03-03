import { useSearchContext } from "../Context/SearchContext";

interface DatePickerDayProps {
  date: number;
  year: number;
  month: number;
  dateHover: Date | null;
  handleDateHover: (date: Date | null) => void;
}

const DatePickerDay: React.FC<DatePickerDayProps> = (props) => {
  const { date, month, year, dateHover, handleDateHover } = props;

  const {
    checkIn,
    checkOut,
    activeCheckInBtn,
    activeCheckOutBtn,
    setCheckInDate,
    setCheckOutDate,
    setActiveCheckInBtn,
    setActiveCheckOutBtn,
  } = useSearchContext();

  const handleDateSelect = (date: Date): void => {
    if (activeCheckInBtn) {
      if (checkIn === null) {
        setCheckInDate(date);
        setActiveCheckInBtn(false);
        setActiveCheckOutBtn(true);
        return
      } else {
        setCheckInDate(date);
      }
    }
    if (activeCheckOutBtn) {
      setCheckOutDate(date);
    }
  };

  const calenderDate = new Date(year, month, date);
  const todaysDate = new Date(Date.now()).getDate();
  const currMonth = new Date(Date.now()).getMonth();
  const validCalendarDate =
    date && ((date >= todaysDate && month === currMonth) || month > currMonth);
  const dateBetweenCheckInAndDateHover =
    checkIn &&
    dateHover &&
    calenderDate.getTime() > checkIn.getTime() &&
    dateHover &&
    calenderDate.getTime() < dateHover.getTime();
  const dateBetweenCheckInAndCheckOut =
    checkIn &&
    checkOut &&
    calenderDate.getTime() > checkIn.getTime() &&
    checkOut &&
    calenderDate.getTime() < checkOut.getTime();

  return (
    <div
      className={`flex relative items-center justify-center w-full h-[45px]
      ${validCalendarDate &&
        ((!checkOut && dateBetweenCheckInAndDateHover) ||
          dateBetweenCheckInAndCheckOut) &&
        "bg-gray-100 border-y border-white rounded-none"
        }
      ${validCalendarDate &&
        (calenderDate.getTime() === checkIn?.getTime() ||
          calenderDate.getTime() === checkOut?.getTime()) &&
        "bg-black text-white rounded-full"
        }
      ${validCalendarDate &&
        checkIn &&
        !checkOut &&
        calenderDate.getTime() === dateHover?.getTime() &&
        "bg-black text-white rounded-full"
        }
      ${date < todaysDate &&
        month === currMonth &&
        "text-gray-200 hover:bg-white"
        }
      `}
      onClick={() => handleDateSelect(calenderDate)}
      onMouseEnter={() => handleDateHover(calenderDate)}
      onMouseLeave={() => handleDateHover(null)}
    >
      <div
        className={`flex absolute top-0 left-0 w-full h-[45px] z-10 justify-center items-center ${validCalendarDate &&
          "hover:border-2 border-black rounded-full cursor-pointer"
          }`}
      >
        {date !== 0 && String(date)}
      </div>
    </div>
  );
};

export default DatePickerDay;
