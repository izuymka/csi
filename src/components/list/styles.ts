import { styled } from "@mui/system";
import List from "@mui/material/List";

export const CustomList = styled(List)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  margin: "0 auto",
  maxWidth: "fit-content",
  bgcolor: "background.paper",
});

export const CustomListItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});


