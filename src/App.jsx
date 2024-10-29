import{BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/layouts/navbar/navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";
import { Footer } from "./components/layouts/footer/Footer";


function App() {
  return (
    <div className="root">
      <BrowserRouter>
      <CartContextProvider>
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />}/>
        <Route path="/cart" element={<CartContainer />}/>
        <Route path="productDetail/:id" element={<ItemDetailContainer/>}></Route>
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path="*" element={<h2>404 not found</h2>}/>
      </Routes>
      </div>
      <Footer />
      </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
