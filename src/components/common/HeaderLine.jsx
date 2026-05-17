export default function HeaderLine({ title }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.line}></div>

        <h2 style={styles.title}>{title}</h2>

        <div style={styles.line}></div>
      </div>
    </div>
  );
}

const styles = {
  // giống hệt product-grid-wrapper
  wrapper: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "20px 20px", // ✅ padding top/bottom 20px + align grid
  },

  container: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    width: "100%",
  },

  title: {
    fontWeight: "600",
    fontSize: "20px",
    whiteSpace: "nowrap",
    margin: 0,
  },

  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#ccc",
  },
};