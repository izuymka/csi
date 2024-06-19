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

function ShopForm({
  changeShops,
  shopList,
  changeIncorrectShops,
  incorrectShopList,
}: ShopFromProps) {
  const [inputValue, setInputValue] = useState("");

  async function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    const stringInputArray = inputValue.split(",");
    const result = await validate(stringInputArray);
    console.log(result);

    let numericIds = result.correct.map((item) => +item);
    let incorrectShops = result.incorrect;
    console.log(numericIds);
    console.log(incorrectShops);

    try {
      let shops = await emulator.getShopsByIds(numericIds);

      changeShops([...shopList, ...shops]);
      changeIncorrectShops([...incorrectShopList, ...incorrectShops]);
      setInputValue("");
    } catch (error) {
      console.error("Ошибка при загрузке магазинов:", error);
    }
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
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
          Добавить
        </CustomButton>
      </FormBox>
    </>
  );
}

export default ShopForm;
