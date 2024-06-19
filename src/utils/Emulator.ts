import { ShopsFakeFetcher, ShopVO } from "../types/types";

// Реализация Emulator() как класса
export default class Emulator implements ShopsFakeFetcher {
  items: ShopVO[];

  constructor() {
    this.items = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `Shop ${index + 1}`,
      city: `City ${index + 1}`,
    }));
  }

  public async getShopsByIds(ids: number[]): Promise<ShopVO[]> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const filteredShops = this.items.filter((shop) =>
            ids.includes(shop.id)
          );
          resolve(filteredShops);
        }, 500);
      } catch (error) {
        reject("An error occurred while fetching shops.");
      }
    });
  }
}
