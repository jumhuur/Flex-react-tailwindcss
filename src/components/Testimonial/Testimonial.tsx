// import { motion } from "framer-motion";
// interface TestimonialProps {
//   quote: string;
//   name: string;
//   title: string;
//   image: string;
// }

// export default function Testimonial({
//   quote,
//   name,
//   title,
//   image,
// }: TestimonialProps) {
//   return (
//     <section className="bg-gray-900 text-white py-16 px-4 flex flex-col items-center text-center">
//       <motion.span
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-indigo-400 uppercase text-sm font-medium tracking-wider mb-6"
//       >
//         Quotes
//       </motion.span>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="max-w-3xl text-2xl md:text-2xl font-medium mb-10 leading-snug"
//       >
//         {quote}
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//         className="flex flex-col items-center"
//       >
//         <img
//           src={image}
//           alt={name}
//           className="w-16 h-16 rounded-full object-cover mb-4"
//         />
//         <h3 className="font-semibold text-lg">{name}</h3>
//         <p className="text-gray-400 text-sm">{title}</p>
//       </motion.div>

//       {/* Dots Navigation */}
//       <div className="flex gap-2 mt-6">
//         <span className="w-2 h-2 rounded-full bg-green-400"></span>
//         <span className="w-2 h-2 rounded-full bg-gray-500"></span>
//         <span className="w-2 h-2 rounded-full bg-gray-500"></span>
//       </div>
//     </section>
//   );
// }

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Example() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>

      <AnimatePresence>
        {show && (
          <motion.div
            key="box"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 bg-blue-500"
          />
        )}
      </AnimatePresence>
    </>
  );
}
