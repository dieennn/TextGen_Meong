import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";
import { passphrase } from "./environment";

const encryptWithAES = (text: string, passphrase: string) => {
  return AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext: string, passphrase: string) => {
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};

const encryptedText = (inputText: string) => encryptWithAES(inputText, passphrase);
const decryptedText = (encryptedText: string) =>
  decryptWithAES(encryptedText, passphrase);

export { encryptedText, decryptedText };
