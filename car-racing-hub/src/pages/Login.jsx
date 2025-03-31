import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import styles from "./Styles/login.module.css";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const userData = await login(formData);
      if (userData._id) {
        setUser(userData); 
        localStorage.setItem("user", JSON.stringify(userData));// Обновяваме контекста
        navigate("/garage"); // Пренасочваме след успешен логин
      } else {
        console.error("Грешка при логин");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
