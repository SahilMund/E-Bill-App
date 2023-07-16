import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { addDoc, collection } from "firebase/firestore";
import { projectFireStore } from "../firebase/config";

const useStorage = () => {
  const mockPerformOCR = (file) => {
    return new Promise((resolve, reject) => {
      // Simulate OCR API call
      setTimeout(() => {
        // Simulate successful response
        resolve({ status: "success" });

        // Simulate error response
        // reject({ error: "File upload failed" });
      }, 2000);
    });
  };

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const storage = getStorage();

  const addImageToFirebase = async (file, collectionName) => {
    const fileId = uuidv4();

    const formatFile = file.type.split("/")[1];

    try {
      // When used with actual OCR API endPoint ,this response will contain the OCR result of the PDF
      const response = await mockPerformOCR(file);
    } catch (error) {
      console.log(error);
      throw error;
    }
    const storageRef = ref(storage, `Files/${fileId}.${formatFile}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        setError(error);
      },
      async () => {
        // Handle successful uploads on complete
        // Get the file URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const createdAt = new Date();

        await addDoc(collection(projectFireStore, collectionName), {
          fileURL: downloadURL,
          createdAt,
          path: `Files/${fileId}.${formatFile}`,
        });

        setUrl(downloadURL);

        // console.log("File available at", downloadURL, createdAt);
      }
    );
  };

  return { progress, url, error, addImageToFirebase };
};

export default useStorage;
