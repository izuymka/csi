import ShopItem from "./ShopItem";
import { ShopListProps } from "../../types/types";
import { CustomList } from "./styles";



function ShopList ({ shops }: ShopListProps) {
  return (
    <CustomList
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        margin: "auto",
      }}
    >
      {shops.map((shop) => (
        <ShopItem
          key={shop.id}
          id={shop.id}
          name={shop.name}
          city={shop.city}
        />
      ))}
    </CustomList>
  );
};

export default ShopList;

