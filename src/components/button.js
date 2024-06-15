function MyButton({ handleClose, children, className }) {
  return (
    <button className={"btn mr-0 ml-auto" + className} onClick={handleClose}>
      {children}
    </button>
  );
}

export default MyButton;
