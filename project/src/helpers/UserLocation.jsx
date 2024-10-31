// UserLocation.js
import { useEffect } from "react";

const UserLocation = ({ setPais }) => {
    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();
                setPais(data.country_name);  // Actualiza el estado del país en ItemDetail
            } catch (error) {
                console.error("Error al obtener la ubicación:", error);
            }
        };

        fetchCountry();
    }, [setPais]);

    return null; // Este componente no necesita renderizar nada
};

export default UserLocation;
