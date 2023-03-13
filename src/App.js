import { Routes, Route } from "react-router-dom";
import { LandingPage, Home, HomePage } from "./components";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/dashboard" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
