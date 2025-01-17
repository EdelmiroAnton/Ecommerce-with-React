import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../helpers/loader";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "../../helpers/loader.scss";
import loader from "../../img/guitarras/loader.jpg";
import { CartContext } from "../../context/CartContext";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1) Referencia al documento
    const docRef = doc(db, "productos", itemId);

    // 2) Peticion del documento
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <img src={loader} className="loader" />
        ) : (
          <ItemDetail {...item} />
        )}
      </div>
    </>
  );
};
