import React from "react";
import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="pdf-container"
        style={{ width: "70%", height: "70vh", margin: "0 30", cursor:'pointer' }}
      >
        
        <iframe
          src={selectedImg}
          type="application/pdf"
          width="100%"
          height="100%"
          title="pdfTItle"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
