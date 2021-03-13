interface CartEntry extends ItemEntry {
  inCart: number;
}

interface CartState {
  [_id: string]: CartEntry;
}

type CartDispatch = (item: ItemEntry, quantity: number) => void;
