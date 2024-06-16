import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComp.scss';

const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const datePickerStartRef = useRef(null);
  const datePickerEndRef = useRef(null);

  const handleIconClick = (isStart) => {
    if (isStart) {
      datePickerStartRef.current.setOpen(true);
    } else {
      datePickerEndRef.current.setOpen(true);
    }
  };

  const handleStartDateClear = () => {
    setStartDate(null);
  };

  const handleEndDateClear = () => {
    setEndDate(null);
  };

  return (
    <div className="picker">
      <span>Date</span>
      <div className="picker__inputs">
        <div className="picker__date">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            ref={datePickerStartRef}
            dateFormat="dd_MM_yyyy"
            closeOnScroll={true}
            placeholderText="From"
          />
          <div className="picker__date-close" onClick={handleStartDateClear}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6569 16.2426L13.4142 12L17.6569 7.75736L16.2426 6.34315L12 10.5858L7.75736 6.34315L6.34315 7.75736L10.5858 12L6.34315 16.2426L7.75736 17.6569L12 13.4142L16.2426 17.6569L17.6569 16.2426Z" fill="#5F5F5F"/>
            </svg>
          </div>
          <div className="picker__date-calendar" onClick={() => handleIconClick(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="#5F5F5F"/>
              <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="#5F5F5F"/>
            </svg>
          </div>
        </div>

        <div className="picker__date">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            ref={datePickerEndRef}
            dateFormat="dd_MM_yyyy"
            closeOnScroll={true}
            placeholderText="To"
          />
          <div className="picker__date-close" onClick={handleEndDateClear}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6569 16.2426L13.4142 12L17.6569 7.75736L16.2426 6.34315L12 10.5858L7.75736 6.34315L6.34315 7.75736L10.5858 12L6.34315 16.2426L7.75736 17.6569L12 13.4142L16.2426 17.6569L17.6569 16.2426Z" fill="#5F5F5F"/>
            </svg>
          </div>
          <div className="picker__date-calendar" onClick={() => handleIconClick(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="#5F5F5F"/>
              <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="#5F5F5F"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComp;
