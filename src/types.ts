export interface CustomerData {
  email: string;
  phone: string;
  pushToken: string;
  customData: object;
}

export interface CustomerSubscribeParams {
  subscriptionChannel: string;
  subscribed: boolean;
}

export interface SendEventeParams {
  eventName: string;
  eventData: object;
}
export interface InitParams {
  baseUrl?: string;
  isServiceWorker?: boolean;
}
