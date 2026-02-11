import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Explore from "./pages/Explore";
import RequestService from "./pages/RequestService";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer  from "./components/Footer"
import ServicesAndStats from "./components/ServicesAndStats";

function App() {
  return (
    <Router>
      <Navbar /> {/* Now it stays at the top of every page */}
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/request" element={<RequestService />} />
      </Routes>
      <Footer />
      </AnimatePresence>

    </Router>
  );
}

export default App;