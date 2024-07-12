import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppForm from "./Components/AppForm";
function App() {
  return (
    <div className="app w-full h-screen">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div
                id="signPage"
                className="w-full h-full debug flex items-center justify-center"
              >
                <AppForm />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
