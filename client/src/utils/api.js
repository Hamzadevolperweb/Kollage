const API_ROOT = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchVideos = async () => {
  const response = await fetch(`${API_ROOT}/videos`);
  return response.json();
};

export const submitContact = async (data) => {
  const response = await fetch(`${API_ROOT}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
