import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./General/Home";
import Navbar from "./General/Navbar";
import Menu from "./General/Menu";

import CreateEntry from "./Entry/CreateEntry/CreateEntry.js";
import TransactionsHome from "./Entry/TransactionsHome";

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
        </div>
    );
};

export default App;
