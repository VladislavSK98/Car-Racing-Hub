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
import { AuthProvider } from "./context/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/details/:id" element={<Details />} />
          
          <Route
            path="/garage"
            element={
              <PrivateRoute>
                <Garage />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
