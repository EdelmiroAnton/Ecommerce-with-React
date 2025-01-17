import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <>
      <div className="row tarjetas justify-content-center">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};
