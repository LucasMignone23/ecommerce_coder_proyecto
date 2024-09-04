import { Navbar } from "./components/layouts/navbar/navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function App() {
  let saludo = "¿Hola, Como estas?";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={saludo} />
    </div>
  );
}

export default App;
