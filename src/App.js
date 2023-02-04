import { Routes, Route } from "react-router-dom";
import {Dashboard, Home} from "./components";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}> */}
        <Route path="dashboard" element={<Dashboard />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
