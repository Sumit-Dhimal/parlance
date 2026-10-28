import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: "*",
        element: <h1>404 - Page not found</h1>
    }

])

export default router;