import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const API_URL = "http://localhost:5005";

const AddCoursePage = () => {
  const [course, setCourse] = useState({
    name: "",
    description: "",
    price: "",
    lecturer: "",
  });

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
    } catch (error) {
      console.error("Error creating course", error);
    }
  };
  return (
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddCoursePage;
