import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  const getAllCourses = () => {
    axios
      .get(`${API_URL}/api/courses`)
      .then((response) => setCourses(response.data))
      .catch((error) => console.log(error));
  };

  console.log(courses);

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {courses.length === 0 && <h3>No courses found</h3>}
        {courses.map((course) => (
          <div key={course._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <Link to={`/courses/${course._id}`}>
                  <h5 className="card-title">{course.name}</h5>
                </Link>
                <p className="card-text">{course.description}</p>
              </div>
              <div className="card-footer">
                <p className="card-text">{course.price}€</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
