import { motion } from 'framer-motion';
import { Backdrop } from './Backdrop';

type Props = {
  children: React.ReactNode;
  handleClose: () => void;
};

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export function Modal({ children, handleClose }: Props) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-sm p-4 mx-auto my-8 bg-white rounded"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 lg:p-8">{children}</div>
        <button onClick={handleClose} className='btn btn--sm'>Close</button>
      </motion.div>
    </Backdrop>
  );
}
