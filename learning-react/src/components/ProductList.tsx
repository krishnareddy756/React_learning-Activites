import ProductCard from "./ProductCard";

export interface Product {
  prodId: number;
  title: string;
  publisher: string;
  author: string;
  price: number;
}

function ProductList() {
  const products: Product[] = [
    {
      prodId: 2012,
      title: "Angels and Demons",
      publisher: "Penguin Random House",
      author: "Dan Brown",
      price: 409,
    },
    {
      prodId: 2019,
      title: "Norse Mythology",
      publisher: "Bloomsbury Publishing",
      author: "Neil Gaiman",
      price: 300,
    },
  ];

  return (
    <div className="container mt-5">

      <div className="border p-4 bg-light">

        <h1 className="text-primary text-center mb-4">
          Featured Titles
        </h1>

        <div className="row g-4">

          {products.map((product) => (
            <div
              className="col-md-6"
              key={product.prodId}
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ProductList;