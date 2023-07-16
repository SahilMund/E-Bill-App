import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
import { FIRESTORE_COLLECTION_NAME } from "../firebase/config";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url, addImageToFirebase } = useStorage();

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile]);

  useEffect(() => {
    file && addImageToFirebase(file, FIRESTORE_COLLECTION_NAME);
  }, [file]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
