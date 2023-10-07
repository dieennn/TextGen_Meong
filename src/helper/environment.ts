import { environment } from "../config/config";

const authGoogle = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  databaseURL: environment.databaseURL,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
};

const passphrase = environment.passphrase;
const keyLocalStorage = environment.keyLocalStorage;

export { authGoogle, passphrase, keyLocalStorage };
