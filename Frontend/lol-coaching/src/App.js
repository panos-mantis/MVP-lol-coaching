
import { Routes ,Route} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<p>Path not resolved</p>} />
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/coaching" element={<Coaching/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
