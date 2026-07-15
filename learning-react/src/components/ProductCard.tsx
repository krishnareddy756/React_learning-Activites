import type { Product } from "./ProductList";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card shadow h-100">

      <div className="card-body p-4">

        <h3 className="card-title text-center mb-4">
          {product.title}
        </h3>

        <p className="card-text">
          Author: <strong>{product.author}</strong>
        </p>

        <p className="card-text">
          Publisher: <strong>{product.publisher}</strong>
        </p>

        <p className="card-text">
          Price: <strong>{product.price}</strong>

          {product.price < 400 && (
            <span className="text-success ms-2">
              - Bestseller!
            </span>
          )}
        </p>

      </div>

    </div>
  );
}

export default ProductCard;