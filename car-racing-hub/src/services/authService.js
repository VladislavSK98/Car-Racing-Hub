const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
console.log("API_URL:", API_URL); // 👈 Провери дали правилно се зарежда

export const register = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Registration failed");
    }

    return response.json();
};

// export const login = async (credentials) => {
//     try {
//         const response = await fetch(`${API_URL}/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(credentials), // Използваме `credentials`, който подава email и password
//         });

//         // Четем JSON веднъж
//         const data = await response.json();

//         console.log("Login response data:", data); // ✅ Log само на данните

//         if (!response.ok) {
//             throw new Error(data.message || "Login failed");
//         }

//         return data; // Връщаме `data`, защото вече сме го парснали
//     } catch (error) {
//         console.error("Login error:", error);
//         throw error; // Прехвърляме грешката нагоре, за да може да се обработи в UI
//     }
// }; 
// export const login = async (credentials) => {
//     try {
//         const response = await fetch(`${API_URL}/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(credentials),
//             credentials: "include", // Важно за получаване на cookie
//         });

//         const data = await response.json();
//         console.log("Login response data:", data);

//         if (!response.ok) {
//             throw new Error(data.message || "Login failed");
//         }

//         // 👉 Ако бекендът не връща токен в JSON, трябва да го вземеш ръчно
//         const token = document.cookie
//             .split("; ")
//             .find(row => row.startsWith("auth_cookie_name=")) // Замени с реалното име на cookie-то
//             ?.split("=")[1];

//         if (token) {
//             localStorage.setItem("token", token); // Запазваме токена
//         } else {
//             console.warn("Token not found in cookies");
//         }

//         return data;
//     } catch (error) {
//         console.error("Login error:", error);
//         throw error;
//     }
// };

export const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            credentials: "include",
        });

        const data = await response.json();
        console.log("Login response data:", data);

        if (!response.ok) {
            throw new Error(data.message || "Login failed");
        }

        if (data.token) { 
            localStorage.setItem("token", data.token);
        } else {
            console.warn("No token received from backend!");
        }

        return data.user;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user profile");
    }

    return await response.json();
};


// export const getProfile = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) throw new Error("No token found");

//     const response = await fetch(`${API_URL}/users/me`, {
//         method: "GET",
//         headers: {
//             "Authorization": `Bearer ${token}`,
//         },
//         credentials: "include",
//     });

//     if (!response.ok) {
//         throw new Error("Failed to fetch user profile");
//     }

//     return response.json();
// };


// export const getProfile = async () => {
//     const response = await fetch(`${API_URL}/users/me`, {
//         method: "GET",
//         credentials: "include", // Задължително, за да се изпратят cookie-та
//     });

//     if (!response.ok) {
//         throw new Error("Failed to fetch user profile");
//     }

//     return response.json(); // Вече профилът трябва да се връща правилно
// };

// export const getProfile = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) throw new Error("No token found");

//     const response = await fetch(`${API_URL}/users/me`, {
//         method: "GET",
//         headers: {
//             "Authorization": `Bearer ${token}`, // ✔️ Изпращаме токена
//         },
//         credentials: "include",
//     });

//     if (!response.ok) {
//         throw new Error("Failed to fetch user profile");
//     }

//     return response.json();
// };

const getAuthHeaders = () => {
    const token = localStorage.getItem('token'); // Вземаме токена от localStorage
    if (token) {
        return { 'Authorization': `Bearer ${token}` }; // Връщаме Authorization заглавие с токена
    }
    return {};
};

export const fetchUser = async () => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeaders(), // Добавяме токена в заглавията на заявката
            },
            credentials: 'include', // За да изпрати бисквитката
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

