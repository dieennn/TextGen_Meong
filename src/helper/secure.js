import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";
import { passphrase } from "./environment.js";

const encryptWithAES = (text, passphrase) => {
  return AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext, passphrase) => {
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};

const encryptedText = (inputText) => encryptWithAES(inputText, passphrase);
const decryptedText = (encryptedText) =>
  decryptWithAES(encryptedText, passphrase);

export { encryptedText, decryptedText };
