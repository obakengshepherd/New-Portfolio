import { motion as Motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <Motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>{title}</h2>
      {children}
    </Motion.section>
  );
}
