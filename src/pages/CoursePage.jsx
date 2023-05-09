import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

const CoursePage = () => {
  const [course, setCourse] = useState(null);
  const [lecturer, setLecturer] = useState(null);

  const { courseId } = useParams();

  const getCourse = () => {
    axios
      .get(`${API_URL}/api/courses/${courseId}`)
      .then((response) => {
        const oneCourse = response.data;
        setCourse(oneCourse);

        axios
          .get(`${API_URL}/api/lecturers/${oneCourse.lecturer}`)
          .then((lecturerResponse) => {
            const lecturerData = lecturerResponse.data;
            setLecturer(lecturerData);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="container">
      <div>CoursePage</div>
      {course && (
        <>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          {lecturer && (
            <p>
              Lecturer: <Link to={`/lecturers/${lecturer._id}`}>{lecturer.name}</Link>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default CoursePage;
