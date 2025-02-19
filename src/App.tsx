import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Jobs from "./pages/Jobs"
import ContactInfo from "./components/ContactInfo"
import ContactForm from "./components/ContactForm"
import ContactLayout from "./layouts/ContactLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="contact" element={<ContactLayout/>}/>
             <Route path="info" element={<ContactInfo/>}/>
             <Route path="form" element={<ContactForm/>}/>
             
          <Route path="jobs" element={<Jobs/>}/>
        </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
