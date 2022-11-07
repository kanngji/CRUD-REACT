import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreawtePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    // typing 되는 것들을 감지...
    const { name, value } = event.target;
    // 여기 이해안됨...
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(post);

    axios
      .post("http://localhost:4000/board/post", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Create a Post</h1>
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            value={post.title}
            placeholder="Title"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            name="description"
            value={post.description}
            placeholder="Description"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          style={{
            width: "100%",
            marginBottom: "1rem",
            variant: "outline-success",
          }}
          onClick={handleClick}
        >
          CREATE POST
        </Button>
      </Form>
      {/* 뒤로 가기 기능 */}
      <Button
        style={{ width: "100%" }}
        variant="outline-dark"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
}

export default CreawtePost;
