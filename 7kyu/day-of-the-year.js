// 6/25/2023

// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  function toDayOfYear(date) {
    const [day, month, year] = date;
  
    const daysInMonth = [
      31, // January
      28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31  // December
    ];
  
    let dayOfYear = 0;
    for (let i = 0; i < month - 1; i++) {
      dayOfYear += daysInMonth[i];
    }
  
    if (month > 2 && isLeapYear(year)) {
      dayOfYear++; // Add an extra day for leap years
    }
  
    dayOfYear += day;
  
    return dayOfYear;
  }