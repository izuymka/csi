import { styled } from "@mui/system";
import { Typography, TextField, Button, Box } from "@mui/material";

export const MainTypography = styled(Typography)({
  display: "inline-block",
  maxWidth: "fit-content",
  color: "#3f51b5",
  fontSize: "2rem",
  fontWeight: "bold",
  marginTop: "30px",
});

export const CustomTextField = styled(TextField)({
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8c9eff",
    },
    "&:hover fieldset": {
      borderColor: "#536dfe",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#536dfe",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#3d5afe",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#536dfe",
  },
});

export const CustomButton = styled(Button)({
  bgcolor: "#536dfe",
  fontSize: "1rem",
  borderRadius: "5px",
  "&:hover fieldset": {
    borderColor: "#536dfe",
  },
  "&:hover": {
    bgcolor: "#3d5afe",
  },
});

export const FormBox = styled(Box)({
  "& > :not(style)": { m: 1, width: "300px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  pt: 1
});
