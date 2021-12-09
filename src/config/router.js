import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import App from "../App";
import Signuplogin from "../Pages/Signuplogin";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Signuplogin />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}