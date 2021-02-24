type ListQuery = {
  from?: number;
  size?: number;
  sortField?: string;
  sortDir?: "asc" | "desc";
  isOnSale?: boolean;
  q?: string;
};
