const DatePickerWeek = () => {
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return (
    <div className='grid grid-cols-7 items-center w-full p-2'>
      {weekdays.map((weekday, i) => (
        <div key={i} className='flex justify-center items-center h-8 text-gray-900'>
          {weekday}
        </div>
      ))}
    </div>
  );
};

export default DatePickerWeek;
