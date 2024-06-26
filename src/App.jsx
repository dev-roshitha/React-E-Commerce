import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Product } from './pages/Product/Product'
import { Products } from './pages/Products/Products'
import "./sass/main.scss"


const Layout = () => {
  return(<>
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  </>)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/REACT_E_COMMERCE/',
        element: <Home/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
    ]
  }
])

const App = () => {
  return(<>
      <RouterProvider router={router} />
    </>)
}

export default App;
