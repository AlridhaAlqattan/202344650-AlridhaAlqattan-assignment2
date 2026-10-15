import { useEffect, useState } from 'react';

function showTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function showDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
}

export default function TimeDate() {
  const [currentTime, setCurrentTime] = useState(showTime(new Date()));
  const [currentDate, setCurrentDate] = useState(showDate(new Date()));

  useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        setCurrentTime(showTime(now));
        setCurrentDate(showDate(now));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <div id="timeDate"> {/* This part uses Javascript to display time and date */}
          <p>Date: <span id="date">{currentDate}</span></p>
          <p>Time: <span id="time">{currentTime}</span></p>
        </div>
    );
}