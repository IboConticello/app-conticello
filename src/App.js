import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from "./context/CartContext";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer/Footer';
import Error404 from './pages/error404/Error404';

// Context
export const MyContext = React.createContext();


// App
function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products/" element={<ItemListContainer />} />
            <Route path="/products/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartContext>
  );
}

// BAJO DEL MAIN RETIRE EL FOOTER DEBIDO A QUE NO SE QUEDA CON LA PROPIEDAD CSS FIXED Y BLOQUEA LA VISIBILIDAD DE ALGUNOS PRODUCTOS - PREGUNTAR SOLUCION

export default App;
