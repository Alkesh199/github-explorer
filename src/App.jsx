import HomePage from "./pages/HomePage";
import UserProfileDetails from "./pages/UserProfileDetails";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import AppProvider from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "profile/:user",
        element: <UserProfileDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router}></RouterProvider>
      </AppProvider>
    </>
  );
}

export default App;
