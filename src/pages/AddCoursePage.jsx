import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import axios from "axios";

const API_URL = "http://localhost:5005";

const AddCoursePage = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [course, setCourse] = useState({
    name: "",
    description: "",
    price: "",
    lecturer: "",
    tags: [],
  });

  const handleTagsChange = (selected) => {
    const tagsArray = selected ? selected.map((item) => item.value) : [];
    setCourse({ ...course, tags: tagsArray });
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/courses`, course);
      console.log(response.data);
      setShowAlert(true);
      setTimeout(() => {
        navigate(`/courses/${response.data._id}`); 
      }, 2000);
    } catch (error) {
      console.error("Error creating course", error);
    }
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="courseName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={course.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="courseDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={course.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="courseTags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect
                isMulti
                name="tags"
                options={[
                  { value: "javascript", label: "JavaScript" },
                  { value: "react", label: "React" },
                  { value: "nodejs", label: "Node.js" },
                  // You can dynamically generate these options based on your needs
                ]}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleTagsChange}
              />
            </Form.Group>

            <Form.Group controlId="coursePrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={course.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="courseLecturer">
              <Form.Label>Lecturer</Form.Label>
              <Form.Control
                type="text"
                name="lecturer"
                value={course.lecturer}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Course `{course.name}` created
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddCoursePage;
