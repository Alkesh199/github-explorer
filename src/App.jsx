import HomePage from "./pages/HomePage"
import UserProfileDetails from "./pages/UserProfileDetails"
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout></Layout>,
  children:[
    {
    path:"/",
    element:<HomePage />
    },
    {
     path:"profile/:user",
      element:<UserProfileDetails />
    }
  ],
}
]);

function App() {
  return (
    <>
    <RouterProvider router = {router}>
      </RouterProvider>
    </>
  )
}

export default App
