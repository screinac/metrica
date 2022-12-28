import StoreItem from "./StoreItem";
import { storeData } from "../public/utils/storeData";

console.log(storeData);

const Store = () => {
  return (
    <div className="p-3">
      {storeData.map((item) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Store;
