import { useState } from "react";

function ProductForm({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "", price: "", category: "", stock: "", description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      alert("Please fill required fields");
      return;
    }

    setProducts([
      ...products,
      { ...form, id: Date.now(), price: Number(form.price) }
    ]);

    setForm({ name:"", price:"", category:"", stock:"", description:"" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name}
        onChange={e => setForm({...form, name:e.target.value})} />

      <input type="number" placeholder="Price" value={form.price}
        onChange={e => setForm({...form, price:e.target.value})} />

      <input placeholder="Category" value={form.category}
        onChange={e => setForm({...form, category:e.target.value})} />

      <input type="number" placeholder="Stock" value={form.stock}
        onChange={e => setForm({...form, stock:e.target.value})} />

      <textarea placeholder="Description"
        onChange={e => setForm({...form, description:e.target.value})} />

      <button>Add Product</button>
    </form>
  );
}

export default ProductForm;
