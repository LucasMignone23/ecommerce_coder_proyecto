import{BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/layouts/navbar/navbar";
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />}/>
        <Route path="/cart" element={<CartContainer />}/>
        <Route path="*" element={<h2>404 not found</h2>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
