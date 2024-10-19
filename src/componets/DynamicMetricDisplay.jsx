import React, { useState, useEffect } from 'react';

function DynamicMetricDisplay({ initialValue = 1000, label }) {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [counting, setCounting] = useState(true);  // Controls whether counting is active

  useEffect(() => {
    let interval;

    if (counting) {
      interval = setInterval(() => {
        // Increment the value by 1k every second
        setCurrentValue((prevValue) => {
          // If current value reaches 100k, reset to 1k
          if (prevValue >= 100000) {
            return 1000; // Reset to 1k after reaching 100k
          }
          return prevValue + 1000; // Increment by 1k
        });
      }, 1000); // Every 1 second
    }

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [counting]);

  // Function to format numbers with 'K' suffix for thousands
  const formatNumber = (num) => {
    if (num == null || isNaN(num)) {
      return 'N/A'; // Fallback for invalid numbers
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`; // Format numbers in 'K' if >= 1000
    }
    return num.toString();
  };

  return (
    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex flex-col items-center justify-center text-white shadow-lg">
      <div className="text-5xl font-bold mb-2">
        {formatNumber(currentValue)}
      </div>
      <div className="text-center px-4">{label}</div>
      <p>Orders Fulfilled Monthly</p>
    </div>
  );
}

export default DynamicMetricDisplay;
