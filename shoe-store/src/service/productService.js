const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function getProducts({ category, gender, search, page = 1, limit = 12 } = {}) {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (gender) params.append('gender', gender);
  if (search) params.append('search', search);
  if (page) params.append('page', page);
  if (limit) params.append('limit', limit);

  const res = await fetch(`${API}/products?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data;
}

export async function getProductById(id) {
  const res = await fetch(`${API}/products/${id}`);
  if (!res.ok) throw new Error('Product not found');
  const data = await res.json();
  return data.product;
}

export async function createProduct(product, token) {
  const res = await fetch(`${API}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(product),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Create product failed');
  return data.product;
}

export async function updateProduct(id, updates, token) {
  const res = await fetch(`${API}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(updates),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Update product failed');
  return data.product;
}

export async function deleteProduct(id, token) {
  const res = await fetch(`${API}/products/${id}`, {
    method: 'DELETE',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Delete product failed');
  return data;
}
