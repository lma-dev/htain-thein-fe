import CryptoJS from "crypto-js";

export const decryptAlgorithm = (encryptedUserData: any) => {
  try {
    if (!encryptedUserData) {
      console.log("Decryption failed: No data provided.");
      return;
    }

    const decryptKey = process.env.NEXT_PUBLIC_DECRYPT_KEY;
    if (!decryptKey) {
      console.log("Decryption failed: Decrypt key is not defined.");
      return;
    }

    const keyWA = CryptoJS.enc.Base64.parse(decryptKey);
    const ciphertextJson = JSON.parse(
      CryptoJS.enc.Base64.parse(encryptedUserData).toString(CryptoJS.enc.Utf8)
    );
    const ivValueWA = CryptoJS.enc.Utf8.parse(
      ciphertextJson.iv + ciphertextJson.value
    );
    const hmacIvValueWA = CryptoJS.HmacSHA256(ivValueWA, keyWA);

    if (ciphertextJson.mac !== hmacIvValueWA.toString()) {
      console.log("Decryption failed: Data integrity compromised.");
      return;
    }

    const ivWA = CryptoJS.enc.Base64.parse(ciphertextJson.iv);
    const decryptedDataWA = CryptoJS.AES.decrypt(ciphertextJson.value, keyWA, {
      iv: ivWA,
    }).toString(CryptoJS.enc.Utf8);

    const parseJson = JSON.parse(decryptedDataWA);
    return parseJson;
  } catch (error) {
    console.log("Decryption failed: ", error);
  }
};
