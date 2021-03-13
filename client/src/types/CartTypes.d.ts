interface CartEntry extends ItemEntry {
  inCart: number;
}

interface CartState {
  [_id: string]: CartEntry;
}

type CartDispatch = (item: ItemEntry | CartEntry, quantity: number) => void;
