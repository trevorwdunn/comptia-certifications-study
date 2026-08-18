const BASE = '/api'

async function request(path, options = {}) {
  const token = localStorage.getItem('cstudy_token')
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `HTTP ${res.status}`)
  }
  return res.json()
}

export const api = {
  auth: {
    register: (email, password, username) =>
      request('/auth/register', { method: 'POST', body: JSON.stringify({ email, password, username }) }),
    login: (email, password) =>
      request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  },
  me: {
    get: () => request('/me'),
    setUsername: (username) => request('/me', { method: 'PATCH', body: JSON.stringify({ username }) }),
  },
  users: {
    search: (q) => request(`/users/search?q=${encodeURIComponent(q)}`),
  },
  friends: {
    list: () => request('/friends'),
    add: (username) => request('/friends', { method: 'POST', body: JSON.stringify({ username }) }),
    accept: (id) => request(`/friends/${id}`, { method: 'PATCH' }),
    remove: (id) => request(`/friends/${id}`, { method: 'DELETE' }),
  },
  progress: {
    get: () => request('/progress'),
    update: (data) => request('/progress', { method: 'POST', body: JSON.stringify(data) }),
  },
}
