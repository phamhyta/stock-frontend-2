import { Routes, Route } from "react-router-dom";
import { Home, HomePage, LandingPage} from "./components";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
