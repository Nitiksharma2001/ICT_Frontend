import { createBrowserRouter } from "react-router-dom";
import ParameterInput from "./pages/parameter-input/parameter-input";

export const router = createBrowserRouter([
    { path: "/parameter-input", Component: ParameterInput },
]);