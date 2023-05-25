import Pay from "./pages/Pay";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/acecoin-pay" element={<Pay />} />
        <Route path="*" element={<Navigate to="/acecoin-pay" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
