const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function getToken() {
  return localStorage.getItem('token');
}

function saveAuth(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export async function register({ username, email, password }) {
  // Backend expects { name, email, password }
  const payload = { name: username || email, email, password };

  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (res.ok) {
    // backend returns token and user
    saveAuth(data.token, data.user);
    return { success: true, message: data.message || 'Registered', user: data.user };
  }

  return { success: false, message: data.message || 'Register failed' };
}

export async function login({ username, email, password }) {
  // Accept either {email, password} or {username, password}
  const identifier = email || username;
  const payload = { email: identifier, password };

  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (res.ok) {
    saveAuth(data.token, data.user);
    return { success: true, message: data.message || 'Logged in', user: data.user };
  }

  return { success: false, message: data.message || 'Login failed' };
}

export async function getProfile() {
  const token = getToken();
  if (!token) return null;

  const res = await fetch(`${API}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.user;
}

export async function updateProfile(update) {
  const token = getToken();
  if (!token) return { success: false, message: 'Not authenticated' };

  const res = await fetch(`${API}/auth/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(update),
  });

  const data = await res.json();
  if (res.ok) return { success: true, message: data.message, user: data.user };
  return { success: false, message: data.message || 'Update failed' };
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
