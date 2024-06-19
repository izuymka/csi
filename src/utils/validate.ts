import { ValidateFn, ValidationResult } from "../types/types";
import Emulator from "./Emulator";

const emulator = new Emulator();

export const validate: ValidateFn = async (
  ids: string[]
): Promise<ValidationResult> => {
  const numericIds = ids.map((id) => parseInt(id));
  console.log(numericIds);

  const shopsId = await emulator.getShopsByIds(numericIds);
  console.log(shopsId);

  const correct = shopsId.map((shop) => shop.id.toString());
  const incorrect = ids.filter((id) => !correct.includes(id));

  return {
    correct,
    incorrect,
  };
};
