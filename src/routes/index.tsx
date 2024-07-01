import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import InformationPage from "../pages/information";
import LeadsPage from "../pages/leads";


const basePath = '/curso-apps-enterprise-nodejs-landing-page';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${basePath}/`} element={<Navigate to={`${basePath}/increva-se`} />} />
                <Route path={`${basePath}/increva-se`} element={<LeadsPage />} />
                <Route path={`${basePath}/informacoes`} element={<InformationPage />} />
            </Routes>
        </BrowserRouter>
    );
}
