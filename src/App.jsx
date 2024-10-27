import{BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/layouts/navbar/navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";


function App() {
  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />}/>
        <Route path="/cart" element={<CartContainer />}/>
        <Route path="productDetail/:id" element={<ItemDetailContainer/>}></Route>
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path="*" element={<h2>404 not found</h2>}/>
      </Routes>
      </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
