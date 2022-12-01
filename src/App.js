import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './storage/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryid' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartContextProvider >
      </>
      );
}
      export default App;
