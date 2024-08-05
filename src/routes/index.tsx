import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import InformationPage from "../pages/information";
import LeadsPage from "../pages/leads";


//const basePath = '/curso-apps-enterprise-nodejs-landing-page';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Navigate to={`/increva-se`} />} />
                <Route path={`/increva-se`} element={<LeadsPage />} />
                <Route path={`/inscreva-se`} element={<LeadsPage />} />
                <Route path={`/informacoes`} element={<InformationPage />} />
            </Routes>
        </BrowserRouter>
    );
}
