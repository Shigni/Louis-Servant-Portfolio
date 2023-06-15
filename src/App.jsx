import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./styles/index.scss";

import { LandingPage, PortfolioPage, Project, AboutPage } from "./pages";
import { Header, Error } from "./components";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
