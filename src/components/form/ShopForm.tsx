// import { Box, TextField, Button, Typography } from "@mui/material";
import {
  MainTypography,
  CustomTextField,
  CustomButton,
  FormBox,
} from "./styles"; // Импортируем стили
import { useState } from "react";
import { emulator } from "../../App";
import { validate } from "../../utils/validate";
import { ShopFromProps } from "../../types/types";

function ShopForm({ changeShops }: ShopFromProps) {
  const [inputValue, setInputVaue] = useState("");

  async function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    const stringInputArray = inputValue.split(",");
    const result = await validate(stringInputArray);
    console.log(result);
    let numbers = result.correct.map((item) => +item);
    let shops = await emulator.getShopsByIds(numbers);
    console.log(shops);
    changeShops(shops);
    setInputVaue("");
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputVaue(event.target.value);
  }

  return (
    <>
      <MainTypography variant="h3" gutterBottom>
        Поиск магазинов по ID
      </MainTypography>
      <FormBox component="form" onSubmit={handleSubmitForm}>
        <CustomTextField
          id="outlined-basic"
          label="Введите id магазинов"
          variant="outlined"
          onChange={handleChangeInput}
          value={inputValue}
          autoComplete="off"
        />
        <CustomButton
          variant="contained"
          size="medium"
          type="submit"
          disableElevation
        >
          Применить
        </CustomButton>
      </FormBox>
    </>
  );
}

export default ShopForm;
