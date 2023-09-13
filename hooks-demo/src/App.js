import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>hooks</h1>
        <p
          onClick={() => {
            navigate("/useMemo");
          }}
        >
          useMemo
        </p>
        <p
          onClick={() => {
            navigate("/useRef");
          }}
        >
          useRef
        </p>
      </div>
    </div>
  );
}

export default App;
