const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center">
      <p className="text-white">
        <span>⛔</span>
        {message}
      </p>
    </div>
  );
};

export default ErrorMessage;
