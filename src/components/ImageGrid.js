import React from "react";
// import useFirestore from "../../hooks/useFirestore";

import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteDoc, doc } from "firebase/firestore";
import {
  FIRESTORE_COLLECTION_NAME,
  projectFireStore,
} from "../firebase/config";
import { deleteObject, getStorage, ref } from "firebase/storage";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore(FIRESTORE_COLLECTION_NAME);

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

  if(!docs){
    return(
      <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
    )
  }
  return (
    <div className="img-grid">

      {docs &&
        docs?.map((doc) => (
          <motion.div key={doc.id}>
            <DeleteForeverIcon width={20} onClick={() => handleDelete(doc)} />
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.imageURL)}
            >
             
              <motion.iframe
                src={doc.imageURL}
                height="200"
                width="300"
                title="Iframe Example"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                
              ></motion.iframe>
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
