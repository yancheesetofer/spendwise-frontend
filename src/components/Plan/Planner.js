import React, { useEffect, useState } from "react";
import axios from "axios";

function BudgetPlanner() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get("http://35.213.129.66/plans/");
      setPlans(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Period selection */}
      <select>
        <option>Last Month</option>
        <option>This Month</option>
        <option>Next Month</option>
      </select>

      {/* Amount you can spend */}
      <h2>
        Amount you can spend: <span>{/* Insert amount value here */}</span>
      </h2>

      {/* Total spending */}
      <p>Total Spending: {/* Insert total spending value here */}</p>

      {/* Total budget */}
      <p>Total Budget: {/* Insert total budget value here */}</p>

      {/* Budget per category list */}
      <ul>
        {plans.map((plan) => (
          <li key={plan.planId}>
            <p>Category: {plan.category}</p>
            <p>Amount Total: {plan.amountTotal}</p>
            <p>Amount Used: {plan.amountUsed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BudgetPlanner;