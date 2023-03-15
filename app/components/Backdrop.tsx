import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Backdrop({ children, onClick }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-10 flex items-center justify-center p-2 bg-opacity-75 bg-slate-900"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
