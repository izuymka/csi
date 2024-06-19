import { useState } from "react";
import ShopList from "./components/list/ShopList";
import Emulator from "./utils/Emulator";
import { ShopVO } from "./types/types";
import ShopForm from "./components/form/ShopForm";

export const emulator = new Emulator();

function App() {
  const [shopList, setShopList] = useState<ShopVO[]>([]);

  return (
    <div className="App">
      <ShopForm changeShops={setShopList} />
      <ShopList shops={shopList} />
    </div>
  );
}

export default App;
