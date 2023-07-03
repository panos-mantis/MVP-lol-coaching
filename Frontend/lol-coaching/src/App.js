
import { Routes ,Route, } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Coaching from "./Coaching";
import ReviewSee from "./ReviewSee"
import ReviewCreate from "./ReviewCreate"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<p>Path not resolved</p>} />
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/reviews" element={<ReviewSee/>}/>
        <Route path="/reviewsCreate" element={<ReviewCreate/>}/>
        <Route path="/coaching" element={<Coaching/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
