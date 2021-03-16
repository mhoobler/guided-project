interface CartEntry extends ItemEntry {
  inCart: number;
}

interface CartState {
  [_id: string]: CartEntry;
}

type SetItemInCart = (item: ItemEntry | CartEntry, quantity: number) => void;

type CartAction =
  | { type: "ADD_ITEM"; payload: CartEntry }
  | { type: "CHANGE_ITEM"; payload: CartEntry }
  | { type: "DELETE_ITEM"; payload: { _id: string } }
  | { type: "CLEAR_CART" };
