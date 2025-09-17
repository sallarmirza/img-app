import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import UserProfile from "./pages/Profile";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<UserProfile/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </>
  );
}

export default App;
