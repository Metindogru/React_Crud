const Button = ({ onClick, btnText }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="absolute w-64 h-10 bg-blue-800 text-white flex items-center justify-center  rounded-md bottom-0 border-transparent mb-3"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
