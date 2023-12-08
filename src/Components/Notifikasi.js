const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed left-0 top-0 p-4 bg-green-500 text-white">
      {message}
      <button onClick={onClose} className="ml-2 text-white focus:outline-none">
        Close
      </button>
    </div>
  );
};

export default Notification;
