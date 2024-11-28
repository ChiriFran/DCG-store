import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import mercadopago from 'mercadopago';
import cors from 'cors';
import express from 'express';

admin.initializeApp();

const accessToken = functions.config().mercadopago.accesstoken;
if (accessToken) {
    mercadopago.configurations.setAccessToken(accessToken);
} else {
    console.error("El token de acceso de Mercado Pago no está definido.");
    process.exit(1);
}

const app = express();
app.use(cors({ origin: true }));

app.post("/crearPreferencia", async (req, res) => {
    const { items, shippingCost, zipCode } = req.body;

    const preference = {
        items: items.map((item) => ({
            title: item.title,           // Nombre del producto
            unit_price: item.unit_price, // Precio unitario
            quantity: item.quantity,     // Cantidad
        })),
        back_urls: {
            success: "https://dcg-store.vercel.app/",
            failure: "https://dcg-store.vercel.app/",
            pending: "https://dcg-store.vercel.app/",
        },
        auto_return: "approved",
        shipments: {
            cost: shippingCost || 0, // Envío opcional (0 si no se especifica)
            zip_code: zipCode || "", // Código postal opcional
        },
    };

    try {
        const response = await mercadopago.preferences.create(preference);
        res.status(200).send({ id: response.body.id });
    } catch (error) {
        console.error("Error al crear preferencia: ", error);
        res.status(500).send({ error: "Hubo un problema al crear la preferencia" });
    }
});

export const crearPreferencia = functions.https.onRequest(app);
