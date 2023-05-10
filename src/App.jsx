import HomePage from "./pages/homepage";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import AllCoursesPage from "./pages/AllCoursesPage";
import CoursePage from "./pages/CoursePage";
import LecturerPage from "./pages/LecturerPage";
import FooterBar from "./components/FooterBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/lecturers/:lecturerId" element={<LecturerPage />} />
        </Routes>
      </div>
      <FooterBar />
    </div>
  );
}

export default App;
