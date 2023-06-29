
import { Routes ,Route, } from "react-router-dom";
import Home from "./Home";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<p>Path not resolved</p>} />

        <Route path="/sign-in" element={<Form/>}/>
       {/*  <Route path="/sign-up" element={<SignUp/>}/> */}
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/coaching" element={<Coaching/>}/> */}
        
      </Routes>
    </div>
  );
}

export default App;
