import Intro from "./component/intro/Intro";
import About from "./component/About/About";
import ProductList from "./component/ProductList/ProductList";
import Contact from "./component/contact/Contact";
import Toggle from "./component/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";



const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }}>
  <Toggle/>
  <Intro/>
  <About/>
  <ProductList/>
  <Contact/>
  </div>;
};

export default App;