const express = require("express");
const cors = require("cors");
const mercadopago = require("mercadopago");

// Configurar el acceso a Mercado Pago
mercadopago.configurations.setAccessToken("TU_ACCESS_TOKEN"); // Reemplaza con tu Access Token

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Crear preferencia
app.post("/crear-preferencia", async (req, res) => {
    const { items, shippingCost, zipCode } = req.body;

    const preference = {
        items: items.map((item) => ({
            title: item.title,
            unit_price: item.price,
            quantity: item.cantidad,
            currency_id: "ARS",
        })),
        back_urls: {
            success: "https://dcg-store.vercel.app/",
            failure: "https://dcg-store.vercel.app/",
            pending: "https://dcg-store.vercel.app/",
        },
        auto_return: "approved",
        shipments: {
            mode: "me2", // Activamos Mercado Envíos
            local_pickup: false,
            dimensions: "30x30x30,500", // Dimensiones (cm) y peso (gramos)
            zip_code: zipCode, // Código postal de origen
            default_shipping_method: null, // Método de envío por defecto (null para que el cliente elija)
            cost: shippingCost, // Costo adicional de envío (opcional)
        },
    };

    try {
        const response = await mercadopago.preferences.create(preference);
        res.json({ id: response.body.id });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear la preferencia");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
