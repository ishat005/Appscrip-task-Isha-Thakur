import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import ProductsNav from "./Components/ProductsNav/ProductsNav";
import CustomNav from "./Components/CustomNav/CustomNav";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <ProductsNav />
      <CustomNav />
      <Footer />
    </div>
  );
}

export default App;
