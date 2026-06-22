import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const categories = ["Electronics", "Fashion", "Home", "Books", "Sports"];

const brands = ["Samsung", "Apple", "Nike", "Adidas", "Sony", "Puma", "LG"];

const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `${brands[i % brands.length]} Product ${i + 1}`,
  category: categories[i % categories.length],
  brand: brands[i % brands.length],
  price: 500 + i * 250,
  rating: (i % 5) + 1,
  stock: i % 4 !== 0,
  image: `https://picsum.photos/300/300?random=${i + 1}`,
}));

export default function FlipkartSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(
    () => ({
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      brand: searchParams.get("brand") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      rating: searchParams.get("rating") || "",
      stock: searchParams.get("stock") || "",
      sort: searchParams.get("sort") || "",
    }),
    [searchParams],
  );

  const updateFilter = (key, value) => {
    const params = Object.fromEntries(searchParams);

    if (!value) {
      delete params[key];
    } else {
      params[key] = value;
    }

    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (filters.search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    if (filters.category) {
      data = data.filter((p) => p.category === filters.category);
    }

    if (filters.brand) {
      data = data.filter((p) => p.brand === filters.brand);
    }

    if (filters.minPrice) {
      data = data.filter((p) => p.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      data = data.filter((p) => p.price <= Number(filters.maxPrice));
    }

    if (filters.rating) {
      data = data.filter((p) => p.rating >= Number(filters.rating));
    }

    if (filters.stock === "true") {
      data = data.filter((p) => p.stock);
    }

    switch (filters.sort) {
      case "priceLow":
        data.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        data.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return data;
  }, [filters]);

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <h2>Filters</h2>

        <input
          placeholder="Search products"
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          style={styles.input}
        />

        <label>Category</label>
        <select
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
          style={styles.input}
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <label>Brand</label>
        <select
          value={filters.brand}
          onChange={(e) => updateFilter("brand", e.target.value)}
          style={styles.input}
        >
          <option value="">All</option>
          {brands.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        <label>Min Price</label>
        <input
          type="number"
          value={filters.minPrice}
          onChange={(e) => updateFilter("minPrice", e.target.value)}
          style={styles.input}
        />

        <label>Max Price</label>
        <input
          type="number"
          value={filters.maxPrice}
          onChange={(e) => updateFilter("maxPrice", e.target.value)}
          style={styles.input}
        />

        <label>Rating</label>
        <select
          value={filters.rating}
          onChange={(e) => updateFilter("rating", e.target.value)}
          style={styles.input}
        >
          <option value="">Any</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
          <option value="2">2★ & above</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={filters.stock === "true"}
            onChange={(e) =>
              updateFilter("stock", e.target.checked ? "true" : "")
            }
          />
          In Stock
        </label>

        <button onClick={() => setSearchParams({})} style={styles.clearBtn}>
          Clear Filters
        </button>
      </aside>

      <main style={styles.content}>
        <div style={styles.topBar}>
          <h2>Products ({filteredProducts.length})</h2>

          <select
            value={filters.sort}
            onChange={(e) => updateFilter("sort", e.target.value)}
            style={{ width: 220 }}
          >
            <option value="">Sort By</option>
            <option value="priceLow">Price Low to High</option>
            <option value="priceHigh">Price High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                style={styles.image}
              />

              <h4>{product.title}</h4>

              <p style={styles.category}>{product.category}</p>

              <div style={styles.rating}>⭐ {product.rating}</div>

              <div style={styles.price}>₹{product.price.toLocaleString()}</div>

              <div
                style={{
                  color: product.stock ? "green" : "red",
                  fontWeight: 600,
                }}
              >
                {product.stock ? "In Stock" : "Out of Stock"}
              </div>

              <button style={styles.buyBtn}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    background: "#f1f3f6",
    minHeight: "100vh",
    gap: 16,
    padding: 16,
  },

  sidebar: {
    width: 280,
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    height: "fit-content",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  content: {
    flex: 1,
  },

  topBar: {
    background: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
    gap: 16,
  },

  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    transition: "all .2s",
  },

  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 10,
  },

  category: {
    color: "#666",
    fontSize: 13,
  },

  rating: {
    color: "#388e3c",
    fontWeight: 600,
  },

  price: {
    fontSize: 20,
    fontWeight: 700,
    margin: "8px 0",
  },

  buyBtn: {
    marginTop: 12,
    width: "100%",
    padding: 10,
    background: "#2874f0",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  clearBtn: {
    marginTop: 10,
    padding: 10,
    background: "#ff5252",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  input: {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ddd",
  },
};
