import ProductCard from "./ProductCard";

function ProductList({ products, view, search }) {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (view === "card") {
    return (
      <div className="grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Price</th><th>Category</th><th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.category}</td>
            <td>{p.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
