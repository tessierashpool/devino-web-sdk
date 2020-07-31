import { getVariables } from '../common';

export const fetchFactory = (url, settings = {}) => {
  const { BASE_URL, API_KEY, APP_ID } = getVariables();

  return fetch(`${BASE_URL}${url}`, {
    credentials: 'include',
    ...settings,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
      'X-DEVINO-APP-ID': APP_ID,
      ...settings.headers,
    },
  });
};

export const handleErrors = (response) => {
  if (!response.ok) {
    return response.json().then((res) => Promise.reject(res.message));
  }
  return response;
};

export const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
