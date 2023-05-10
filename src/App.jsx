import HomePage from "./pages/homepage";
import NavBar from "./components/NavBar";
import UserProfile from "./pages/UserProfile"; 
import GuestPage from "./pages/GuestPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/guestpage" element={<GuestPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
