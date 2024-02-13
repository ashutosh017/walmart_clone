"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings";
import RemoveFromCart from "./RemoveFromCart";

function AddToCart({ product }: { product: Product }) {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);
  console.log(cart);
  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;
  console.log("how many in cart ", howManyInCart);
  const handleAdd = () => {
    console.log("adding to cart ", product);
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className="bg-walmart hover:bg:walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }
  return (
    <Button className="bg-walmart hover:bg:walmart/50" onClick={handleAdd}>
      Add to Cart
    </Button>
  );
}

export default AddToCart;
