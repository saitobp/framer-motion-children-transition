import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  function handleClick() {
    setRandomNumber(Math.floor(Math.random() * 100));
  }

  return (
    <motion.div>
      <motion.h1
        key={randomNumber}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {randomNumber}
      </motion.h1>

      <button onClick={handleClick}>Change</button>
    </motion.div>
  );
}
