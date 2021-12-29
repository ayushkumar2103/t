const Error = ({ error = "Something went wrong...." }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default Error;
