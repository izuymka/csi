import ShopItem from "./ShopItem";
import { ShopListProps } from "../../types/types";
import { CustomList, CustomListItem } from "./styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Grid, Typography } from "@mui/material";

function ShopList({ shops, incorrectShopList }: ShopListProps) {
  return (
    <>
      <CustomList>
        {shops.length > 0 && <Typography>Магазины</Typography>}
        {shops.map((shop) => (
          <ShopItem
            key={shop.id}
            id={shop.id}
            name={shop.name}
            city={shop.city}
          />
        ))}
        {incorrectShopList.length > 0 && (
          <Typography>Некорректно введенные магазины</Typography>
        )}
        {incorrectShopList.map((incorrectShopId, index) => (
          <CustomListItem key={index} alignItems="flex-start">
            <ListItemText primary={incorrectShopId} />
          </CustomListItem>
        ))}
      </CustomList>
    </>
  );
}

export default ShopList;
