import { addDays, addMonths, lastDayOfMonth, subDays } from "date-fns";

export const getMonthlyPayments = (startDate: Date, duration: number) => {
  const endDate = addMonths(startDate, duration - 1);

  return {
    bonuses: getMidMonthDaysArray(startDate, endDate),
    salary: getLastDaysArray(startDate, endDate),
    months: duration,
  };
};

const getMidMonthDaysArray = (start: Date, end: Date) => {
  const dateArray: (string | Date)[] = [];
  dateArray.push("");

  let current = addMonths(start, 1); // Next month

  while (current <= end) {
    let midMonth;
    const _midMonth = new Date(current.getFullYear(), current.getMonth(), 15);

    if (_midMonth.getDay() === 0) {
      // Sunday
      midMonth = addDays(_midMonth, 3);
    } else if (_midMonth.getDay() === 6) {
      // Saturday
      midMonth = addDays(_midMonth, 4);
    } else {
      midMonth = _midMonth;
    }

    if (midMonth) {
      dateArray.push(midMonth);
    }

    current = addMonths(current, 1);
  }

  return dateArray;
};

const getLastDaysArray = (start: Date, end: Date) => {
  const dateArray: Date[] = [];
  let current = new Date(start);

  while (current <= end) {
    let lastDay;
    const _lastDay = lastDayOfMonth(new Date(current));

    if (_lastDay.getDay() === 0) {
      // Sunday
      lastDay = subDays(_lastDay, 2);
    } else if (_lastDay.getDay() === 6) {
      // Saturday
      lastDay = subDays(_lastDay, 1);
    } else {
      lastDay = _lastDay;
    }

    if (lastDay) {
      dateArray.push(lastDay);
    }

    current = addMonths(current, 1);
  }

  return dateArray;
};
