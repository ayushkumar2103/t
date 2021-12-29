const Spinner = ({ splash = "Loading..." }) => {
  return (
    <div
      className="spinner-border"
      role="status"
      style={{ width: "80px", height: "80px", margin: "100px 0px" }}
    >
      <span className="sr-only">{splash}</span>
    </div>
  );
};

export default Spinner;
