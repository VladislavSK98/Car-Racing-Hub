const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { "Authorization": `Bearer ${token}` } : {};
};

const apiService = {
    async request(endpoint, method = "GET", body = null, auth = false) {
        const headers = { "Content-Type": "application/json", ...auth ? getAuthHeaders() : {} };
        
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
            credentials: "include",
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Request failed");
        return data;
    },

    // Authentication
    register(userData) { return this.request("register", "POST", userData); },
    login(credentials) { return this.request("login", "POST", credentials); },
    getProfile() { return this.request("users/me", "GET", null, true); },

    // Cars Management
    addCar(carData) { return this.request("cars", "POST", carData, true); },
    getCars() { return this.request("cars", "GET", null, true); },
    deleteCar(carId) { return this.request(`cars/${carId}`, "DELETE", null, true); },

    // Tracks Management
    addTrack(trackData) { return this.request("tracks", "POST", trackData, true); },
    getTracks() { return this.request("tracks", "GET", null, true); },
    deleteTrack(trackId) { return this.request(`tracks/${trackId}`, "DELETE", null, true); }
};

export default apiService;
