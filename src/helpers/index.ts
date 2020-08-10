import { getVariables } from '../common/index';

export const fetchFactory = (url: string, settings = {} as RequestInit) => {
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

export const handleErrors = (response: Response) => {
  if (!response.ok) {
    return response.json().then((res) => Promise.reject(res.message));
  }
  return response;
};

export const urlBase64ToUint8Array = (base64String: string) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export const onURLChange = (() => {
  let currentURL = window.location.href;
  let oldURL = currentURL;
  const callbacks: ((url: string) => void)[] = [];

  setInterval(function () {
    currentURL = window.location.href;
    if (currentURL !== oldURL) {
      callbacks.forEach((cb) => {
        cb(currentURL);
      });
      oldURL = currentURL;
    }
  }, 500);

  return (cb: (url: string) => void) => {
    callbacks.push(cb);
  };
})();
