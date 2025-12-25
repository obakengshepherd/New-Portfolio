import { motion as Motion } from "framer-motion";

export default function Card({ title, text }) {
  return (
    <Motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={styles.card}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </Motion.div>
  );
}

const styles = {
  card: {
    padding: "1.25rem",
    background: "linear-gradient(180deg,#071028,#021018)",
    borderRadius: "12px",
    minHeight: "140px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};
