import React, { useMemo } from "react";

const ExpensiveComponent = ({ count }) => {
    console.log("ExpensiveComponent re-rendered");

    // Simulating heavy computation
    const computeExpensiveValue = useMemo(() => {
      console.log("Computing...");
      let sum = 0;
      for (let i = 0; i < 1000000000; i++) {
        sum += count;
      }
      return sum;
    },[count]);
  
    return <div>Computed Value: {computeExpensiveValue}</div>;
};

export default React.memo(ExpensiveComponent);