import { onURLChange } from '../helpers';
import { sendEvent } from '../triggers';

let API_KEY = '';
let APP_ID = '';
let BASE_URL = process.env.BASE_URL;
const EMAIL_URL_MARKER = 'email_marker';
let IS_EMAIL_WATCHED = false;
let IS_SERVICE_WORKER = false;

/**
 * Initialize basic configuration
 *
 * @param {string} apiKey - API Key
 * @param {string} appId - App ID
 */
export const init = ({ apiKey, appId, baseUrl, isServiceWorker = false }) => {
  API_KEY = apiKey;
  APP_ID = appId;
  IS_SERVICE_WORKER = isServiceWorker;
  baseUrl && (BASE_URL = baseUrl);

  if (!IS_EMAIL_WATCHED && !IS_SERVICE_WORKER) {
    sendEventIfUrlHasMarker(window.location.href);
    IS_EMAIL_WATCHED = true;
  }
  console.log('Hello qeqewerwerwerewrewr');
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

/**
 * Url watcher, to send event if url has email marker
 */
const watchEmailMarkerInUrl = () => {
  sendEventIfUrlHasMarker(window.location.href);
  onURLChange(sendEventIfUrlHasMarker);
};

/**
 * Send event if url param has marker
 *
 * @param {string} url - url to check marker
 */
const sendEventIfUrlHasMarker = (url) => {
  if (new RegExp(EMAIL_URL_MARKER).test(url)) {
    sendEvent({ eventName: 'EMAIL_LINK', eventData: { url } });
  }
};
