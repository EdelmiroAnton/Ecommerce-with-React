import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

import loader from "../../img/guitarras/loader.jpg";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Footer } from "../Footer/Footer";

export const ListItemContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1) Armar referencia
    const productosRef = collection(db, "productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;
    // 2) Pedir referencia
    getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoria]);

  return (
    <main>
      {loading ? (
        <img src={loader} className="loader" />
      ) : (
        <ItemList productos={productos} />
      )}
      <Footer />
    </main>
  );
};
