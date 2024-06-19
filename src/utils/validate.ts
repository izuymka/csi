import { ValidateFn, ValidationResult } from "../types/types";

export const validate: ValidateFn = async (
  ids: string[]
): Promise<ValidationResult> => {
  const numericIds = ids
    .map((id) => parseInt(id))
    .filter((id) => id >= 1 && id <= 100);
  const incorrect = ids
    .filter(
      (id) => isNaN(parseInt(id)) || parseInt(id) < 1 || parseInt(id) > 100
    )
    .map((id) => id.toString());

  const correct = numericIds.map((shop) => shop.toString());

  return {
    correct,
    incorrect,
  };
};
