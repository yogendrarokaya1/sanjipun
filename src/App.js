import "./App.css";
import Header from "./components/Navbar/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer.js";
import Footertop from "./components/Footer/Footertop";
import Roadmapsec from "./components/Roadmap/Roadmapsec";
import Collectionslide from "./components/collectionSlide/Collectionslide";
import Redsaintcollection from "./components/redsaintcollection/Redsaintcollection";
function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Redsaintcollection/>
      <Collectionslide/>
      <Roadmapsec/>
      <Footertop/>
      <Footer/>
    </div>
  );
}

export default App;
