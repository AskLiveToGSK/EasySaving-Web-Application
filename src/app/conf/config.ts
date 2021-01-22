export const ApplicationConfig = Object.freeze({
  appTitle: 'Easy-Saving',
  projectTokens: '$EASY-SAVING$',
  appVersion: '1.0.33',
  production: true,
  baseURL: 'http://127.0.0.1:4201',
  cdnPath: 'https://easy-saving.s3.amazonaws.com',
  staticCdnPath: 'https://easy-saving.s3-accelerate.amazonaws.com',
  apiURL: 'http://127.0.0.1:4000',
  fileUploadUrl: 'http://127.0.0.1:4000/api/CloudStore/easy-saving-live/upload',
  serverFileUploadUrl: 'http://127.0.0.1:4000/api/LocalStore/files/upload',
  queryDataLimit: 9,
  queryDataCardsLimit: 9,
  defaultTimeZone: 'Asia/Kolkata',
  notificationConfig: {
    position: ['bottom', 'right'],
    timeOut: 4000,
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
    maxLength: 100
  },
  paymentConfig: {
    failed: 'http://127.0.0.1:4001/system/payment-failure',
    success: 'http://127.0.0.1:4001/system/payment-success'
  }
});
