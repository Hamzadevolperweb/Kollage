import { motion } from 'framer-motion';

function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative overflow-hidden"
    >
      {children}
    </motion.main>
  );
}

export default PageWrapper;
