import { useState, useEffect } from "react";

const TimeDifference = ({ timestamp }) => {
  const [timeMessage, setTimeMessage] = useState("");
  console.log(timestamp);

  useEffect(() => {
    const calculateDifference = () => {
      const now = new Date();
      const past = new Date(timestamp);
      const diffInMs = now - past;
      console.log('Current time (now):', now);
      console.log('Old time (old):', past);

      // Calculate units
      const seconds = Math.floor(diffInMs / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30); // Approximation
      const years = Math.floor(months / 12);

      // Determine the message based on the difference
      if (seconds < 60) {
        setTimeMessage("Opened few seconds ago");
      } else if (minutes < 60) {
        setTimeMessage(`Opened ${minutes} minute${minutes > 1 ? "s" : ""} ago`);
      } else if (hours < 24) {
        setTimeMessage(`Opened ${hours} hour${hours > 1 ? "s" : ""} ago`);
      } else if (days < 30) {
        setTimeMessage(`Opened ${days} day${days > 1 ? "s" : ""} ago`);
      } else if (months < 12) {
        setTimeMessage(`Opened ${months} month${months > 1 ? "s" : ""} ago`);
      } else {
        setTimeMessage(`Opened ${years} year${years > 1 ? "s" : ""} ago`);
      }
    };

    calculateDifference();

    // Update every minute
    const interval = setInterval(calculateDifference, 60000);

    // Cleanup function to clear interval when the component unmounts
    return () => clearInterval(interval);
  }, [timestamp]); // Dependency on timestamp to recalculate when timestamp changes

  return <>{timeMessage}</>;
};

export default TimeDifference;
