export interface CustomerData {
  email: string;
  phone: string;
  pushToken: string;
  customData: object;
}

export interface CustomerSubscribeParams {
  subscribtionChannel: string;
  subscribed: boolean;
}

export interface SendEventeParams {
  eventName: string;
  eventData: object;
}
export interface InitParams {
  apiKey: string;
  appId: string;
  baseUrl?: string;
  isServiceWorker?: boolean;
}
