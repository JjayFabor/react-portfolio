import { motion } from 'framer-motion';

const MotionButton = (props) => {

  return (
    <motion.button 
      className="px-4 py-2 md:px-6 md:py-1 lg:px-8 lg:py-2 rounded-md relative bg-slate-500 hover:bg-slate-600 hover:shadow-2xl white-drop-shadow" 
      initial={{ "--x": "100%", scale: 1 }} 
      animate={{ "--x": "-100%" }} 
      whileTap={{ scale: 0.97 }} 
      transition={{ 
        repeat: Infinity, 
        repeatType: "loop", 
        repeatDelay: 1, 
        duration: 5, 
        type: "spring", 
        stiffness: 20, 
        damping: 15, 
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        }
      }}
      onClick={props.click}
    >
      <span className="font-dinasti-regular font-semibold text-sm md:text-lg lg:text-lg h-full w-full block relative tracking-wide linear-mask">
        {props.buttonText}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
}

export default MotionButton;
