import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Home page</h1>
      {/* localhost:3000/create 로 이동 */}
      <Button
        variant="outline-dark"
        style={{ width: "100%" }}
        onClick={() => navigate("create")}
      >
        NEXT
      </Button>
    </div>
  );
}

export default App;
