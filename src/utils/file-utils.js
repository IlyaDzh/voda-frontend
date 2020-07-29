import getExtension from "file-extension";

export const convertToBase64 = blob =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(blob);
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = error => reject(error);
    });

export const removeBase64Header = base64String =>
    base64String.substring(base64String.indexOf(";base64,") + ";base64,".length);

export const getFileExtensionFromName = fileName => getExtension(fileName);
