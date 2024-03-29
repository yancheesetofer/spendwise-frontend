import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./General/Home";
import Navbar from "./General/Navbar";
import Menu from "./General/Menu";
import BudgetPlanner from "./Plan/Planner";
import CreateEntry from "./Entry/CreateEntry/CreateEntry.js";
import TransactionsHome from "./Entry/TransactionsHome";
import Planner from "./Plan/Planner";

const App = () => {
  return (
    // Wrapper
    <div>
      <Navbar />
      {/* TODO add other service Switch-Route path */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="transactions/*" element={<TransactionsHome />} />
      </Routes>
      <Routes>
        <Route path="planner/*" element={<BudgetPlanner />} />
      </Routes>
    </div>
  );
};

export default App;
