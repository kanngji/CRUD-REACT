// db에서 모든 데이터를 얻어야함
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Posts() {
  const [posts, setPosts] = useState([]);
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
  return (
    <div style={{ width: "90%", textAlign: "center", margin: "auto auto" }}>
      <h1>Posts page</h1>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div
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
                    style={{ width: "100%", marginRight: "1rem" }}
                  >
                    UPDATE
                  </Button>
                  <Button variant="outline-danger" style={{ width: "100%" }}>
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
