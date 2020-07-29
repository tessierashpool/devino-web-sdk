let API_KEY = '';
let APP_ID = '';
const BASE_URL = process.env.BASE_URL;

const fetchFactory = (url, settings = {}) => {
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

const handleErrors = (response) => {
  if (!response.ok) {
    return response.json().then((res) => Promise.reject(res.message));
  }
  return response;
};

/**
 * Initialize basic configuration
 *
 * @param {string} apiKey - API Key
 * @param {string} appId - App ID
 */
export const init = ({ apiKey, appId }) => {
  API_KEY = apiKey;
  APP_ID = appId;
};

/**
 * Update customer data
 *
 * @param {string} email - Customer email
 * @param {string} phone - Customer phone
 * @param {string} pushToken - PushToken
 * @param {object} customData - Custom data
 * @returns {Promise}
 */
export const updateCustomerData = ({ email, phone, pushToken, customData = {} }) => {
  return fetchFactory('/customers/data', {
    method: 'PUT',
    body: JSON.stringify({
      email,
      phone,
      pushToken,
      customData,
      reportedDateTimeUtc: new Date(),
    }),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

/**
 * Customer subscription
 *
 * @param {string} subscribtionChannel - Channel to subscribe
 * @param {boolean} subscribed - Subcribe mark (true/false)
 * @returns {Promise}
 */
export const customerSubscribe = ({ subscribtionChannel, subscribed }) => {
  return fetchFactory('/customers/subscription', {
    method: 'PUT',
    body: JSON.stringify({
      subscribtionChannel,
      subscribed,
      reportedDateTimeUtc: new Date(),
    }),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

/**
 *  Send trigger event to server
 *
 * @param {string} eventName - Event name
 * @param {object} eventData - Event data
 * @returns {Promise}
 */
export const sendEvent = ({ eventName, eventData = {} }) => {
  return fetchFactory('/users/event', {
    method: 'POST',
    body: JSON.stringify({
      eventName,
      eventData,
      reportedDateTimeUtc: new Date(),
    }),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

export const getSettings = () => {
  return {
    API_KEY,
    APP_ID,
    BASE_URL,
  };
};
