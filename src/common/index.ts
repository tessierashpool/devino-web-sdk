import { onURLChange } from '../helpers/index';
import { sendEvent } from '../triggers/index';
import { InitParams } from '../types';

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
export const init = ({ baseUrl, isServiceWorker = false }: InitParams) => {
  IS_SERVICE_WORKER = isServiceWorker;
  baseUrl && (BASE_URL = baseUrl);

  if (!IS_EMAIL_WATCHED && !IS_SERVICE_WORKER) {
    sendEventIfUrlHasMarker(window.location.href);
    IS_EMAIL_WATCHED = true;
  }
};

/**
 * Get app variables
 *
 * @returns {object} - Object with app variables
 */
export const getVariables = () => {
  return {
    BASE_URL,
    IS_EMAIL_WATCHED,
    IS_SERVICE_WORKER,
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
const sendEventIfUrlHasMarker = (url: string) => {
  if (new RegExp(EMAIL_URL_MARKER).test(url)) {
    sendEvent({ eventName: 'EMAIL_LINK', eventData: { url } });
  }
};
