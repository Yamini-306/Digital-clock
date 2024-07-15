import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const[currentTime, setcurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatHour =(hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  
  return (
   <>
   <div className="digital-clock">
    <h1>Digital Clock</h1>
    <div className="time">
      {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}
      :{formatTimeWithLeadingZero(currentTime.getMinutes())}:
      {formatTimeWithLeadingZero(currentTime.getSeconds())}
      {currentTime.getHours() >= 12 ? " PM" : " AM" }
    </div>
    <div className="date">Monday, July 15,  2024</div>
   </div>
   </>
  );
}

export default App;
