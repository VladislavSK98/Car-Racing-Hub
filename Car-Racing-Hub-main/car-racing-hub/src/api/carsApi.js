// api/carsApi.js
const baseUrl = 'http://localhost:5000/api/cars';

export async function addCar(carData, token) {
    console.log('🔥 Token being sent:', token);
    const response = await fetch('http://localhost:5000/api/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 👈 Тук е важното!
        },
        body: JSON.stringify(carData)
        
    });
    


    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to add car: ${JSON.stringify(errorData)}`);
    }

    return await response.json();
}


export async function deleteCar(carId) {
    await fetch(`${baseUrl}/${carId}`, { method: 'DELETE' });
}
export async function getCarsByUser(userId) {
    const res = await fetch(`http://localhost:5000/api/cars/user/${userId}`);
    if (!res.ok) throw new Error('Failed to fetch cars');
    return res.json();
}


export async function updateCar(carId, updatedData) {
    const response = await fetch(`${baseUrl}/${carId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
    });
    return await response.json();
}

export async function getCarById(carId) {
    const response = await fetch(`${baseUrl}/${carId}`);
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to fetch car: ${JSON.stringify(error)}`);
    }

    return await response.json();
}

