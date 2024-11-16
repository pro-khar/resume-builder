import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux-beta/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing.tsx";
import Error from "./components/Error.tsx";

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
    path: "resume-builder/*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
