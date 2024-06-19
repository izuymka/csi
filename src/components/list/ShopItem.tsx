import { ShopVO } from "../../types/types";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ShopItem({ id, name, city }: ShopVO) {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        marginTop: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: 350,
        marginBottom: "10px",
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt="Shop's icon"
          src="https://cdn-icons-png.flaticon.com/256/8771/8771926.png"
          sx={{ width: 48, height: 48 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={id}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline-block" }}
              component="span"
              variant="body2"
              color="text.primary"
              fontWeight="bold"
              fontSize="1.1rem"
              marginRight="5px"
            >
              {name}
            </Typography>
            <Typography
              sx={{ display: "inline-block" }}
              component="span"
              variant="body2"
              color="text.primary"
              fontSize="1rem"
            >
              {city}
            </Typography>
          </React.Fragment>
        }
        sx={{ ml: 2 }}
      />
    </ListItem>
  );
}

