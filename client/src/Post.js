// db에서 모든 데이터를 얻어야함
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios
      // get 할떄 이렇게 자세하게 적어야함 ㅎ;
      .get("http://localhost:4000/board/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:4000/board/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // 아마도 새로고침을 하는 명령어 인듯하다
    window.location.reload();
  };

  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    console.log(updatedPost);
    axios
      .put(`http://localhost:4000/board/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };
  return (
    <div style={{ width: "90%", textAlign: "center", margin: "auto auto" }}>
      <h1>Posts page</h1>
      <Button
        style={{ width: "100%", marginBottom: "1rem" }}
        varian="outline-dark"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="title"
                name="title"
                value={updatedPost.title ? updatedPost.title : ""}
                onChange={handleChange}
              />
              <Form.Control
                name="description"
                value={updatedPost.description ? updatedPost.description : ""}
                placeholder="description"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div
                key={post._id}
                style={{
                  border: "solid lightgray 1px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="outline-info"
                    onClick={() => updatePost(post)}
                    style={{ width: "100%", marginRight: "1rem" }}
                  >
                    UPDATE
                  </Button>

                  <Button
                    onClick={() => deletePost(post._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    DELETE
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Posts;
