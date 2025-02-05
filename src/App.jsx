import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "../src/pages/home";
import { Login } from "../src/pages/login";
import { Feed } from "../src/pages/feed";
import { Cadastro } from "../src/pages/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
