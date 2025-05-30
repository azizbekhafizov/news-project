import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Header/Header.jsx'
import Product from './product/Product.jsx'
import Footer from './Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Product />
    <Footer />
  </StrictMode>,
)
