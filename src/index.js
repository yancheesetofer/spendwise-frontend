import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App";
import "./index.css";

import Root from "./routes/root";
import Home from "./routes/Home";

import Transaction from "./routes/Transaction";
import CreateEntry from "./routes/CreateEntry";
import ListEntry from "./routes/ListEntry";
import EntryDetail from "./components/Entry/EntryDetail";

import Error from  "./components/General/404";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "transactions/*",
                element: <Transaction />
            },
            {
                path: "transactions/add/",
                element: <CreateEntry />
            },
            {
                path: "transactions/diary/",
                element: <ListEntry />
            },
            {
                path: "transactions/diary/:id",
                element: <EntryDetail />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
