import { useState, useEffect } from "react";
import {
  getCurrentUTCTime,
  getCurrentUTCTimeString,
  getCurrentUTCTimestamp,
  getCurrentUTCComponents,
  getFormattedUTCTime,
} from "../utils/time";

const UTCTimeClock = () => {
  const [currentTime, setCurrentTime] = useState({
    date: getCurrentUTCTime(),
    isoString: getCurrentUTCTimeString(),
    timestamp: getCurrentUTCTimestamp(),
    components: getCurrentUTCComponents(),
    formatted: getFormattedUTCTime(),
  });

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime({
        date: getCurrentUTCTime(),
        isoString: getCurrentUTCTimeString(),
        timestamp: getCurrentUTCTimestamp(),
        components: getCurrentUTCComponents(),
        formatted: getFormattedUTCTime(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h2>Current UTC Time</h2>

      <div style={{ marginBottom: "15px" }}>
        <h3>Date Object:</h3>
        <p>{currentTime.date.toString()}</p>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <h3>ISO String:</h3>
        <p>{currentTime.isoString}</p>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <h3>Timestamp (ms):</h3>
        <p>{currentTime.timestamp}</p>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <h3>UTC Components:</h3>
        <ul>
          <li>Year: {currentTime.components.year}</li>
          <li>Month: {currentTime.components.month}</li>
          <li>Day: {currentTime.components.day}</li>
          <li>Hours: {currentTime.components.hours}</li>
          <li>Minutes: {currentTime.components.minutes}</li>
          <li>Seconds: {currentTime.components.seconds}</li>
          <li>Milliseconds: {currentTime.components.milliseconds}</li>
        </ul>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <h3>Formatted UTC String:</h3>
        <p>{currentTime.formatted}</p>
      </div>
    </div>
  );
};

export default UTCTimeClock;
