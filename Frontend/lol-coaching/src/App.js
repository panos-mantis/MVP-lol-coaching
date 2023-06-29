import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Services from "./ServicesOffered/Services";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      {/* <Routes>
        <Route to="/" element={<Home/>}/>
        <Route to="/about" element={<About/>}/>
        <Route to="/coaching" element={<Coaching/>}/>
        <Route to="/sign-in" element={<SignIn/>}/>
        <Route to="/sign-up" element={<SignUp/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
