import { Product } from "../../../models/Product.tsx";

export interface ProductsProps {
  url: string;
  descriptionBackgroundColor: string;
}

export interface ProductListProps {
  products: Product[];
  descriptionBackgroundColor: string;
}
