type ItemEntry = {
  _id: string;
  name: string;
  description: string;
  price: number;
  avgRating: number;
  isOnSale: boolean;
  stockCount: number;
  imageUrl: string;
};

interface CartEntry extends ItemEntry {
  inCart: number;
}
