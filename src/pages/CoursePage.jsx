import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Image, Row, Col, Button, Badge } from "react-bootstrap";

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
      {course && (
        <Row>
          <Col xs={12} lg={6}>
            <Card style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>
                  <h1>{course.name}</h1>
                </Card.Title>
                <Card.Text>
                  <p>{course.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {lecturer && (
            <Col xs={12} lg={6}>
              <Card style={{ marginBottom: "15px" }}>
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Image
                      src={lecturer.profileImage}
                      style={{ width: "40px", borderRadius: "50%" }}
                    />
                    <div className="ml-4">
                      <h5 className="mb-0">{lecturer.name}</h5>
                    </div>
                  </div>
                  <Button variant="outline-primary" size="sm">
                    Edit
                  </Button>
                </Card.Body>
                <hr />
                <Card.Body className="d-flex justify-content-between align-items-center bg-light">
                  <Badge variant="success">Active account</Badge>
                  <Button variant="outline-secondary" size="sm">
                    Switch
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

export default CoursePage;
