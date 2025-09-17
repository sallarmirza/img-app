import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import UserProfile from "./components/Profile";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<UserProfile/>}/>
    </Routes>
    </>
  );
}

export default App;
