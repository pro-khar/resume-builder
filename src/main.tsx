import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/App/Landing.tsx";
import Error from "./components/App/Error.tsx";

const router = createBrowserRouter([
  {
    path: "resume-builder/",
    element: <Landing />,
  },
  {
    path: "resume-builder/app",
    element: <App />,
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
