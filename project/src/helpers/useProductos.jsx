import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const useProductos = (searchTerm = "", category = "", urlCategory = "") => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [titulo, setTitulo] = useState("Todos los productos");

  useEffect(() => {
    setIsLoading(true);
    const productosDb = collection(db, "productos");
    let qProductos = productosDb;

    if (searchTerm && category) {
      qProductos = query(
        productosDb,
        where("title", "==", searchTerm),
        where("category", "==", category)
      );
    } else if (searchTerm) {
      qProductos = query(productosDb, where("title", "==", searchTerm));
    } else if (category) {
      qProductos = query(productosDb, where("category", "==", category));
    } else if (urlCategory) {
      qProductos = query(productosDb, where("category", "==", urlCategory));
    }

    getDocs(qProductos)
      .then((productosResp) => {
        setProductos(
          productosResp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setIsLoading(false);
        if (category) {
          setTitulo(capitalizeFirstLetter(category));
        } else if (urlCategory) {
          setTitulo(capitalizeFirstLetter(urlCategory));
        } else {
          setTitulo("Todos los productos");
        }
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
        setIsLoading(false);
      });
  }, [searchTerm, category, urlCategory]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return { productos, isLoading, titulo };
};

export default useProductos;
