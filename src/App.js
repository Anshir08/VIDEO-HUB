import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Videos from "./components/Videos";
import Upload from "./components/Upload";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
