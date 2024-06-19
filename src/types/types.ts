export type ShopVO = {
  id: number;
  name: string;
  city: string;
};

export type ShopsFakeFetcher = {
  items: ShopVO[];
  getShopsByIds: (ids: number[]) => Promise<ShopVO[]>;
};

export type ValidateFn = (ids: string[]) => Promise<ValidationResult>;

export type ValidationResult = {
  correct: string[];
  incorrect: string[];
};

export type ShopForm = {
  onSubmit: (ids: string[]) => Promise<ValidationResult>;
};

export type ShopListProps = {
  shops: ShopVO[];
  incorrectShopList: string[];
};

export type ShopFromProps = {
  changeShops: React.Dispatch<React.SetStateAction<ShopVO[]>>;
  shopList: ShopVO[];
  changeIncorrectShops: React.Dispatch<React.SetStateAction<string[]>>;
  incorrectShopList: string[];
};

