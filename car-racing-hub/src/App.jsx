import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Parking from "./pages/Parking.jsx";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Garage from "./pages/Garage.jsx";
import Tracks from "./pages/Tracks.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TopTracks from "./components/Tracks/TopTracks.jsx";


function App() {
 

  return (
    <Router>
      <Header />
      <Navigation />
      <p>Welcome to the Car Racing Hub!</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div>
      <TopTracks />
    </div>

      <Footer />
    </Router>
  );
}

export default App;
