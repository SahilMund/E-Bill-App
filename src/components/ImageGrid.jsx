import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import useFirestore from "../hooks/useFirestore";
import { deleteDoc, doc } from "firebase/firestore";
import {
  FIRESTORE_COLLECTION_NAME,
  projectFireStore,
} from "../firebase/config";
import { deleteObject, getStorage, ref } from "firebase/storage";
import Loader from "./Loader";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore(FIRESTORE_COLLECTION_NAME);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = async (post) => {
    try {
      const storage = getStorage();
      const docRef = doc(projectFireStore, FIRESTORE_COLLECTION_NAME, post.id);
      console.log();

      // Remove the 'capital' field from the document
      await deleteDoc(docRef);
      console.log("deleted from firestore");
      // Delete the file
      const { path } = post;
      console.log(path);
      const storageRef = ref(storage, path);

      await deleteObject(storageRef);
      console.log("deleted from store");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tOutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(tOutId);
    };
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="file-grid">
      {docs &&
        docs?.map((doc) => (
          <motion.div key={doc.id}>
            <DeleteForeverIcon
              width={20}
              style={{ color: "crimson" }}
              title="Remove"
              onClick={() => handleDelete(doc)}
            />

            <RemoveRedEyeIcon
              width={20}
              style={{ color: "#637381" }}
              onClick={() => setSelectedImg(doc.fileURL)}
            />
            <motion.div
              className="file-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
            >
              <iframe
                src={doc.fileURL}
                height="200"
                width="300"
                title="Iframe Example"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
