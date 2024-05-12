import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import InformationPage from "../pages/information";
import LeadsPage from "../pages/leads";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/increva-se" />} />
                <Route path="/increva-se" element={<LeadsPage />} />
                <Route path="/informacoes" element={<InformationPage />} />
            </Routes>
        </BrowserRouter>
    );  
}