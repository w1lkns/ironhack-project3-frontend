import HomePage from "./pages/homepage";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllCoursesPage from "./pages/AllCoursesPage";
import CoursePage from "./pages/CoursePage";
import LecturerPage from "./pages/LecturerPage";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route
            path="/lecturers/:lecturerId"
            element={<LecturerPage />}
          ></Route>
        </Routes>
        <FooterBar />
      </div>
    </>
  );
}

export default App;
