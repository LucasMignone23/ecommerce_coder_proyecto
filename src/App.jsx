import { Navbar } from "./components/layouts/navbar/navbar";
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";


function App() {
  let saludo = "¿Hola, Como estas?";
  return (
    <div>
      <Navbar />
      {/*<ItemListContainer greeting={saludo} />*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
