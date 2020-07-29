export const askNotificationPermission = () => {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then((result) => {
        resolve(result);
      }, reject);
    }
  }).then(function (permissionResult) {
    if (permissionResult == 'granted') {
      getPushSubscription();
    } else {
      console.warn("We weren't granted permission.");
    }
  });
};

const getPushSubscription = () => {};
