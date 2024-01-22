import { GlobalToast } from "@components/GlobalToast";
import pt from "@utils/i18n/pt.json";
import { PrimeReactProvider, addLocale } from "primereact/api";
import { QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalLoalding } from "./components/GlobalLoading";
import { ChangePassowrdPage } from "./pages/Auth/ChangePassword";
import { HomePage } from "./pages/Auth/Home";
import { LoginPage } from "./pages/Auth/Login";
import { RegisterPage } from "./pages/Auth/Register";
import { Interceptor } from "./services/interceptor";
import { queryClient } from "./services/queryClient";
import { LandingPage } from "@pages/Auth/Landing";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/changepassword",
    element: <ChangePassowrdPage />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const App = () => {
  //@ts-ignore
  addLocale("pt", pt);

  return (
    <>
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalLoalding />
          <Interceptor>
            <RouterProvider router={router} />
          </Interceptor>
        </QueryClientProvider>
      </PrimeReactProvider>
      <GlobalToast />
    </>
  );
};

export default App;
