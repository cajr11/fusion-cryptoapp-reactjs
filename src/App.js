import Layout from "./components/UI/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route />
            <Route />
            <Route />
            <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
