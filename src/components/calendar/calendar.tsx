import React, { useState, useRef } from "react";
import styles from "./calendar.module.scss";
import DownLogo from "../../shared/assets/icons/down.svg?react";

const formatDate = (date: Date): string => {
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

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const Calendar = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    setStartDate(selectedDate);
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className={styles.calendar}>
      <input
        className={styles.calendar__inputDate}
        type="date"
        value={startDate.toISOString().slice(0, 10)}
        onChange={handleDateChange}
        ref={inputRef}
      />
      <button className={styles.calendar__button} onClick={handleButtonClick}>
        <span className={styles.calendar__value}>{formatDate(startDate)}</span>
        <DownLogo className={styles.calendar__buttonDownImage} />
      </button>
    </div>
  );
};
