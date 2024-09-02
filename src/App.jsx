import { Main } from "./components/main/main";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
