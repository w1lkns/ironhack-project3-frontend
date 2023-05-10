import { useState } from "react";
import axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const API_URL = "http://localhost:5005";

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Make a request to the server with the search term
    axios
      .get(`${API_URL}/api/courses/search`, { params: { term: searchTerm } })
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "#ff593b",
              color: "#fff",
              outline: "none",
              border: "none",
            }}
          >
            Search
          </Button>
        </InputGroup>
      </form>
      {results.map((course) => (
        <div key={course._id}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          {/* Link to the course's page */}
        </div>
      ))}
    </div>
  );
};

export default CourseSearch;
