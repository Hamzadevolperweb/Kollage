const API_ROOT = import.meta.env.VITE_API_URL || '/api';

export const fetchVideos = async () => {
  try {
    const response = await fetch(`${API_ROOT}/videos`);
    if (!response.ok) throw new Error('Failed to fetch videos');
    return await response.json();
  } catch (error) {
    console.warn('Video fetch error:', error);
    return { videos: [] };
  }
};

export const submitContact = async (data) => {
  try {
    const response = await fetch(`${API_ROOT}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit contact form');
    return await response.json();
  } catch (error) {
    console.error('Contact submission error:', error);
    throw error;
  }
};

export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_ROOT}/health`);
    return response.ok;
  } catch {
    return false;
  }
};
