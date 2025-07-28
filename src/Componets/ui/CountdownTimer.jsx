import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center text-white bg-white/10 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🎉 Special Offer Ends In:</h2>
      <div className="flex justify-center gap-4 text-lg md:text-xl font-semibold">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg shadow-md">
            <div className="text-3xl">{timeLeft[unit]}</div>
            <div className="uppercase text-sm tracking-wide">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
