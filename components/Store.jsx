import StoreItem from "./StoreItem";
import { storeData } from "../public/utils/storeData";

import manchaVerde from "../public/images/fondo-2-verde.svg";
import manchaVerde2 from "../public/images/fondo-3-curva-verde.svg";

const Store = () => {
  return (
    <div className="relative">
      <img
        src={manchaVerde.src}
        alt="fondo verde"
        className="w-full absolute -z-10"
      />
      <img
        src={manchaVerde2.src}
        alt="fondo verde"
        className="w-full absolute -z-10 top-96"
      />
      <div className="p-3">
        {storeData.map((item) => (
          <StoreItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
