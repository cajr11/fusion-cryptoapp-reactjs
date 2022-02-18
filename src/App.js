import Layout from "./components/UI/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tokens from "./pages/Tokens";

function App() {
  return (
    <div className="bg-gray-500">
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tokens" element={<Tokens />} />
            <Route />
            <Route />
            <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
