import StudenInfo from "./components/StudentInfo";
import SubmitPage from "./components/SubmitPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/" element={<StudenInfo/>} />
      <Route path="/submit-page" element={<SubmitPage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
