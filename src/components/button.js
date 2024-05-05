function LoginModal({ handleClose, children, className }) {
  return (
    <button
      className={
        "bg-white text-green-500 py-2 px-6 rounded-full text-lg font-bold uppercase hover:border-gray-800 border-3 border-green-500 " +
        className
      }
      onClick={handleClose}
    >
      {children}
    </button>
  );
}

export default LoginModal;
