interface DatePickerMonthYearProps {
  month: number;
  year: number;
}

const DatePickerMonthYear: React.FC<DatePickerMonthYearProps> = ({
  month,
  year,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className='flex gap-2 justify-center w-full py-2 font-semibold'>
      <span>{months[month]}</span>
      <span>{year}</span>
    </div>
  );
};

export default DatePickerMonthYear;
