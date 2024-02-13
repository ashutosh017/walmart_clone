import { Product } from "@/typings/productTypings";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce(
    (acc: number, currentProdut: Product) => acc + currentProdut.price,
    0
  );
  return `${
    products[0]?.currency ? products[0]?.currency : "$"
  } ${total.toFixed(2)}`;
  //   return `USD ${total.toFixed(2)}`;
}
