let API_KEY = '';
let APP_ID = '';
const BASE_URL = process.env.BASE_URL;

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
 * Get app variables
 *
 * @returns {object} - Object with app variables
 */
export const getVariables = () => {
  return {
    API_KEY,
    APP_ID,
    BASE_URL,
  };
};
