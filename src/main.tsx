import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux-beta/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing.tsx";
import Error from "./components/Error.tsx";
import AuthListener from "./components/AuthListener.tsx";
import Login from "./components/Auth/Login.tsx";
import Signup from "./components/Auth/Signup.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import MyResumes from "./components/Resumes/MyResumes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/resumes", element: <MyResumes /> }],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <Provider store={store}>
      <AuthListener />
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
