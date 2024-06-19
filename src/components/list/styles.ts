import { styled } from "@mui/system";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

export const CustomList = styled(List)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: "fit-content",
  bgcolor: "background.paper",
});

export const CustomListItem = styled(ListItem)({
  width: "100%",
  bgcolor: "background.paper",
  margin: "10px 10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
});


